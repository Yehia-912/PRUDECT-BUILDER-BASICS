interface IProps {
  imageURL: string;
  alt: string;
  classes: string;
}

const Image = ({ alt, imageURL,classes }: IProps) => {
  return <img src={imageURL} alt={alt}  className={classes} />;
};

export default Image;
