import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {useApplicationContext} from '../../hooks/useApplicationContext';
import {withProtection} from '../../components/withProtection';
import {UserProfileCard} from '../../components/UserProfileCard';
import {DatePicker} from '@probablybroken/common';
import {getInterrupts} from '../../services/getInterrupts';
import {deleteInterrupt} from '../../services/deleteInterrupt';
import {postInterrupt} from '../../services/postInterrupt';
import {DayOff} from '../../types';
import {filterDayOff} from '../../utils/filterDayOff';
import {useSnack} from '../../hooks/useSnack';
import {DateCards} from '../../components/DateCards';
import {DashboardContent} from './DashboardContent';
import {Skeleton} from '../../components/Skeleton';
import dayjs from 'dayjs';

const Component = () => {
  const snack = useSnack();
  const [dayoffs, setDayoffs] = React.useState<DayOff[]>([]);
  const [loaded, setLoaded] = React.useState(false);
  const {setContent, forgetUser, state} = useApplicationContext();
  const content = (state?.content['dashboard'] as DashboardContent);
  const {user} = state;
  const isReady = !!loaded && !!content;

  React.useEffect(() => {
    if (!content) {
      setContent('dashboard', require('./content.json'));
    }

  }, [state.content, content, setContent]);

  React.useEffect(() => {
    async function fetchDayoffs() {
      const data = await getInterrupts();

      setDayoffs(data);
    }

    if (!loaded) {
      fetchDayoffs();
      setLoaded(true);
    }
  }, [loaded]);

  const handleLogout = () => {
    forgetUser();
    snack.success('User logged out successfully');
  };

  const handleRemoveDayOff = async (id: number) => {
    await deleteInterrupt(id.toString());

    const filteredDayOffs = filterDayOff(dayoffs, id);

    setDayoffs(filteredDayOffs);

    snack.success('Day-off successfully removed');
  };

  const handleAddDayOff = async (id: any) => {
    try {
      const date = +dayjs(id).format('YYYYMMDD');

      await postInterrupt(date);

      const data = await getInterrupts();

      setDayoffs(data);
  
      snack.success('Day-off successfully added');
    } catch (error) {
      snack.error('Failed to add day-off');
    }
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" pt={4}>
      <Box width="550px" p={1}>
        <Skeleton isLoading={!isReady} variant="rectangular" width="550px" height="60px">
          <Paper>
            <Box display="flex" flexDirection="row">
              <DatePicker
                label="Schedule a day-off"
                value={dayjs().toString()}
                disablePast={true}
                onChange={handleAddDayOff}
              />
            </Box>
          </Paper>
        </Skeleton>
        <Box mt={4}>
          <Skeleton isLoading={!isReady} variant="rectangular" width="550px" height="24px">
            <Typography color="white" variant="h6" component="h2">
              {content?.myDayOffText}
            </Typography>
          </Skeleton>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" mt={4}>
          <Skeleton isLoading={!isReady} variant="rectangular" width="110px" height="158px">
            {
              dayoffs.length ? (
                <DateCards dayoffs={dayoffs} cardButtonLabel="Remove" cardButtonOnClick={handleRemoveDayOff}/>
              ) : (
                <Typography color="white">{content?.noDayOffText}</Typography>
              )
            }
          </Skeleton>
        </Box>
      </Box>
      <Box width="256px" p={1}>
        <Skeleton isLoading={!isReady} variant="rectangular" width="256px" height="178px">
          <UserProfileCard name={user.name as string} avatar={user.avatar as string} onClick={handleLogout} buttonText={content?.logoutButtonText} />
        </Skeleton>
      </Box>
    </Box>
  );
};

export const Dashboard = withProtection(Component);
