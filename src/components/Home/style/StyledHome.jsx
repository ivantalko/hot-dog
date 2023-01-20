import styled from 'styled-components';
import FrameImage from 'helpers/images/home/home-frame-1x.png';
import FrameImageX from 'helpers/images/home/home-frame-2x.png';
import FrameImageT from 'helpers/images/home/home-frame-1xt.png';
import FrameImageTX from 'helpers/images/home/home-frame-2xt.png';
import FrameImageM from 'helpers/images/home/home-frame-1xm.png';
import FrameImageMX from 'helpers/images/home/home-frame-2xm.png';

export const StyledTitle = styled('h1')`
  @media screen and (min-width: 320px) {
    position: absolute;
    max-width: 767px;
    width: 280px;
    height: 88px;
    font-size: 32px;
    line-height: 44px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 588px;
    height: 200px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 100px;
    color: black;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 588px;
    height: 200px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 100px;
    color: black;
  }
`;

export const StyledFrameImage = styled('div')`
  @media screen and (min-width: 320px) {
    max-width: 424px;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${FrameImageM});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${FrameImageMX});
    }
  }

  @media screen and (min-width: 425px) {
    max-width: 767px;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${FrameImageM});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${FrameImageMX});
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 1023px;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${FrameImageT});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${FrameImageTX});
    }
  }
  @media screen and (min-width: 1024px) {
    max-width: 1439px;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${FrameImage});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${FrameImageX});
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 2560px;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${FrameImage});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${FrameImageX});
    }
  }
`;
