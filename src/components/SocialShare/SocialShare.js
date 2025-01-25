import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  WhatsappIcon,
} from "react-share";

const SocialShare = ({ url, title, iconSize = "w-8 h-8" }) => {
  return (
    <div className="social-share flex space-x-2">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon className={`${iconSize}`} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon className={`${iconSize}`} />
      </TwitterShareButton>
      <PinterestShareButton url={url} media={`${url}/image.jpg`}>
        <PinterestIcon className={`${iconSize}`} />
      </PinterestShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon className={`${iconSize}`} />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
