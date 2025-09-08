import { MediaType } from '@shared/types/generalTypes';
import { Button, Stack } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import TelegramIcon from '@mui/icons-material/Telegram';

import createComment from '@shared/api/kinohub/services/comments/createComment';
import TextField from '@mui/material/TextField';

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
    formState: { errors },
    reset,
  } = useForm<CommentInputs>();

  const queryClient = useQueryClient();

  const onSubmit = async (data: CommentInputs) => {
    await createComment(mediaId, mediaType, data?.review);
    await queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] });
    reset();
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}
      sx={{ '& .MuiOutlinedInput-root': { padding: 0 } }}
    >
      <Controller
        name="review"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          minLength: 10,
          maxLength: 500,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            minRows={1}
            placeholder={`Share your thoughts about this ${mediaType === 'tv' ? 'Series' : 'Movie'}`}
            multiline
            sx={(theme) => ({
              '& .MuiOutlinedInput-input': {
                color: theme.palette.grey[700],
                backgroundColor: theme.palette.common.white,
                borderRadius: 1,
                minHeight: '80px',
                padding: 4,
              },
            })}
          />
        )}
      />
      {errors.review && (
        <span>
          This field is required and have to be more than 10 characters and less than 500 characters
        </span>
      )}

      <Button type="submit" startIcon={<TelegramIcon />} sx={{ placeSelf: 'start' }}>
        Post Review
      </Button>
    </Stack>
  );
}
