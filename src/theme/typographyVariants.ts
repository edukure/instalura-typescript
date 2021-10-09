import { CSSProperties } from 'styled-components';

export type TypographyVariant = {
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
  lineHeight: CSSProperties['lineHeight'];
};

export type TypographyVariants = {
  title: TypographyVariant;
  titleXS: TypographyVariant;
  subTitle: TypographyVariant;
  paragraph1: TypographyVariant;
  paragraph2: TypographyVariant;
  smallestException: TypographyVariant;
};

const typographyVariants: TypographyVariants = {
  // [title]
  title: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 1.25, // 125%
  },
  titleXS: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.25, // 125%
  },
  // [subTitle]
  subTitle: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.25, // 125%
  },
  // [paragraph1]
  paragraph1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.25, // 125%
  },
  // [paragraph2]
  paragraph2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.25, // 125%
  },
  // [smallestException]
  smallestException: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1, // 100%
  },
};

export default typographyVariants;
