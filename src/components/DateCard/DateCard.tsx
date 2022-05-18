import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions  from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface DateCardProps {
  month: string;
  day: string;
  year: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

export const DateCard = ({
  month,
  day,
  year,
  buttonLabel,
  onButtonClick
}: DateCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography>
          {month}
        </Typography>
        <Typography>
          <strong>
            {day}
          </strong>
        </Typography>
        <Typography>
          {year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onButtonClick} color="error">
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}
