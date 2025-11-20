import Image from "next/image";
import { Button } from "./Button";
import {  CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-white py-20 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      </div>
      
      <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center ">
          <div className="space-y-3 flex flex-col items-center  lg:items-start max-w-2xl mx-auto text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Trusted by 10,000+ businesses
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
              The Best Software to Grow your Sales and Services
            </h1>
            <p className="text-md text-slate-500 leading-relaxed">
              Streamline your workflow, boost productivity, and scale your business with our all-in-one platform designed for modern teams.
            </p>

            <Button  variant="primary" size="md">
                Get Started
            </Button>

          
          </div>
         
            <div className="relative m-auto max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/dashboard.svg"
                alt="Flowtiva Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
         
          </div>
        </div>

    </section>
  );
};

export default Hero;