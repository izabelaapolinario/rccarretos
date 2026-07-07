import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
   return (
    <Card
      shadow={true}
      className="h-full rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <CardBody>
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
          <Icon className="h-8 w-8" />
        </div>

        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-3"
        >
          {title}
        </Typography>

        <Typography className="text-gray-600 font-normal leading-7">
          {children}
        </Typography>

      </CardBody>
    </Card>
  );
}


export default FeatureCard;
