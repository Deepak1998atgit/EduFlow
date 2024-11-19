import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

interface CardComponentProps {
  image?: string;
  title: string;
  description: string;
  footerContent?: React.ReactNode;
  cardClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  title,
  description,
  footerContent,
  cardClassName = "max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300",
  headerClassName = "relative h-56",
  bodyClassName = "",
  footerClassName = "pt-0",
  titleClassName = "mb-2",
  descriptionClassName = "text-gray-600",
}) => {
  return (
    <Card className={cardClassName}>
      {image && (
        <CardHeader className={headerClassName}>
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </CardHeader>
      )}
      <CardBody className={bodyClassName}>
        <Typography variant="h5" className={titleClassName}>
          {title}
        </Typography>
        <Typography className={descriptionClassName}>{description}</Typography>
      </CardBody>
      {footerContent && <CardFooter className={footerClassName}>{footerContent}</CardFooter>}
    </Card>
  );
};

export default CardComponent;
