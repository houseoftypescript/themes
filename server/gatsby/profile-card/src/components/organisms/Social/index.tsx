import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'gatsby';
import React from 'react';

export const Social: React.FC = () => {
  return (
    <div className="mx-auto mt-6 flex w-4/5 flex-wrap items-center justify-between pb-16 lg:w-full lg:pb-0">
      <Link
        className="link"
        to="https://facebook.com"
        data-tippy-content="@facebook_handle"
      >
        <FacebookIcon
          titleAccess="facebook"
          fontSize="large"
          className="fill-current text-gray-600 hover:text-sky-700"
        />
      </Link>
      <Link
        className="link"
        to="https://twitter.com"
        data-tippy-content="@twitter_handle"
      >
        <TwitterIcon
          titleAccess="twitter"
          fontSize="large"
          className="fill-current text-gray-600 hover:text-sky-700"
        />
      </Link>
      <Link
        className="link"
        to="https://github.com"
        data-tippy-content="@github_handle"
      >
        <GitHubIcon
          titleAccess="github"
          fontSize="large"
          className="fill-current text-gray-600 hover:text-sky-700"
        />
      </Link>
      <Link
        className="link"
        to="https://linkedin.com"
        data-tippy-content="@unsplash_handle"
      >
        <LinkedInIcon
          titleAccess="linkedin"
          fontSize="large"
          className="fill-current text-gray-600 hover:text-sky-700"
        />
      </Link>
      <Link
        className="link"
        to="https://reddit.com"
        data-tippy-content="@dribble_handle"
      >
        <RedditIcon
          titleAccess="reddit"
          fontSize="large"
          className="fill-current text-gray-600 hover:text-sky-700"
        />
      </Link>
      <Link
        className="link"
        to="https://instagram.com"
        data-tippy-content="@instagram_handle"
      >
        <InstagramIcon
          titleAccess="instagram"
          fontSize="large"
          className="fill-current text-gray-600 hover:text-sky-700"
        />
      </Link>
      <Link
        className="link"
        to="https://youtube.com"
        data-tippy-content="@youtube_handle"
      >
        <YouTubeIcon
          titleAccess="youtube"
          fontSize="large"
          className="fill-current text-gray-600 hover:text-sky-700"
        />
      </Link>
    </div>
  );
};

export default Social;
