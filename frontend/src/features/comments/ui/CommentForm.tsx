import { MediaType } from '@shared/types/generalTypes';
import { Button, Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import type { Property } from 'csstype';
import TextField from '@mui/material/TextField';
import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';

interface CommentFormProps {
  mediaType: MediaType;
  defaultValue?: string;
  cssPlaceSelf?: Property.PlaceSelf;
  onSubmit: (review: string) => void;
  labelSubmitButton?: string;
}

interface CommentInputs {
  review: string;
}

export default function CommentForm({
  mediaType,
  onSubmit,
  cssPlaceSelf = 'start',
  defaultValue = '',
  labelSubmitButton = 'Post review',
}: CommentFormProps) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CommentInputs>({
    defaultValues: { review: defaultValue },
    mode: 'onSubmit',
  });

  function handleOnSubmit(review: string | undefined) {
    const value: string | undefined = review?.trim();

    if (!value) return;

    onSubmit?.(value);
    reset();
  }

  const rules = {
    required: { value: true, message: 'Review is required' },
    minLength: { value: 10, message: 'At least 10 characters' },
    maxLength: { value: 500, message: 'No more than 500 characters' },
  };

  const reviewPlaceholder = `Share your thoughts about this ${mediaType === 'tv' ? 'series' : 'movie'}...`;
  const isErrors: boolean = Object.keys(errors).length > 0;

  return (
    <Stack
      onSubmit={handleSubmit((data: CommentInputs) => handleOnSubmit(data?.review))}
      component="form"
      gap={4}
      mb={10}
    >
      <Controller
        name="review"
        // rules={rules}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={reviewPlaceholder}
            multiline
            fullWidth
            minRows={5}
            variant="outlined"
            error={Boolean(errors.review)}
            helperText={errors.review && errors.review.message}
          />
        )}
      />

      <Button
        disabled={isErrors}
        type="submit"
        startIcon={<TelegramIcon />}
        sx={{ placeSelf: cssPlaceSelf }}
      >
        {labelSubmitButton}
      </Button>
    </Stack>
  );
}
