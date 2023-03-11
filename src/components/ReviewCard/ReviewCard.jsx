import React from 'react';
import PropTypes from 'prop-types';
import { getUserDate } from 'utils/getDate';
import { setCorrectAvatarURL } from 'utils/setCorrectAvatarURL';
import {  AuthorReview, Avatar,  DateReview, ReviewInfoWrapper, ReviewText } from './ReviewCard.styled';


export const ReviewCard = ({review}) => {
  // console.log(review);
  const { author, author_details: { avatar_path }, created_at, content } = review;
  return (
    <>
        <ReviewInfoWrapper>
            <Avatar
              src={setCorrectAvatarURL(avatar_path)}
              width="50"
              alt={author}
            />
         
        
          <AuthorReview>{author}</AuthorReview>
          <DateReview>{getUserDate(created_at)}</DateReview>
        </ReviewInfoWrapper>
        <ReviewText>{content}</ReviewText>
    </>
  )
}