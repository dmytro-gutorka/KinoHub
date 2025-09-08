import { MediaType } from '@shared/types/generalTypes';
import { Button, Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import TelegramIcon from '@mui/icons-material/Telegram';
import TextField from '@mui/material/TextField';
import useCreateComment from '@features/comments/model/useCreateComment';

interface CommentFormProps {
  mediaId: number;
  mediaType: MediaType;
}

interface CommentInputs {
  review: string;
}

export default function CommentForm({ mediaId, mediaType }: CommentFormProps) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CommentInputs>();

  const { mutate: createComment } = useCreateComment(mediaId, mediaType, reset);

  return (
    <Stack
      onSubmit={handleSubmit((data: CommentInputs) => createComment(data?.review))}
      component="form"
      gap={4}
      mb={10}
      // sx={{ '& .MuiOutlinedInput-root': { padding: 0 } }}
    >
      <Controller
        name="review"
        control={control}
        defaultValue=""
        rules={{ required: true, minLength: 10, maxLength: 500 }}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={`Share your thoughts about this ${mediaType === 'tv' ? 'series' : 'movie'}...`}
            multiline
            variant="outlined"
            error={Boolean(errors.review)}
            helperText={
              errors.review &&
              'This field is required and have to be more than 10 characters and less than 500 characters'
            }
            sx={(theme) => ({
              '& .MuiOutlinedInput-input': {
                color: theme.palette.grey[100],
                // backgroundColor: theme.palette.common.white,
                borderRadius: 2,
                minHeight: '80px',
                border: '1px solid white',
                padding: 4,
              },
            })}
          />
        )}
      />

      <Button type="submit" startIcon={<TelegramIcon />} sx={{ placeSelf: 'start' }}>
        Post Review
      </Button>
    </Stack>
  );
}
