import React, { useState } from "react";
import cloud2 from "../assets/clouds/cloud2.png";
import cloud3 from "../assets/clouds/cloud3.png";
import cloud4 from "../assets/clouds/cloud4.png";
import cloud5 from "../assets/clouds/cloud5.png";

const blogPosts = [
  {
    id: 1,
    date: "2025-06-15 - Present",
    title: "Developing A Vision Model",
    content: `For this project, I planned for a few key steps. The first step was to connect any prebuilt model to the existing web app so that I could learn \
    to make API calls and integrate the OpenAI API into my product. I found that this method was not very efficient for my final goal because GPT\'s vision model \
    has hard restrictions on prompts that want any sort of diagnosis. Therefore, results that I could get out of this model were not very efficient, but I gained \
    valuable experience in developing Next.js routes and making API calls.\n\n
    My next step was to use a prebuilt vision model that does not have the same restrictions that the GPT model had in order to obtain more functionality and proceed closer \
    towards my end goal. I utilized the Hugging Fact ViT model and hosted it locally. I found that, because the ViT model had no training on pet health conditions, it performed very \
    poorly when it came to the actual identification of the issue in the image. So, I proceeded towards the next step in my plan, which was to create a model that was ustom trained on a \
    dog eye dataset in order to improve its prediction capabilities. \n\n
    Using a dataset from Roboflow, I created python scripts in order to clean and sort the data based on annotations, and pre-processed the data while following the specified bounding boxes. \
    Next, I trained my model on the new dataset using PyTorch and TensorFlow and saved the final model so that I could utilize it later when I was integrating it into the actual web app. \
    After preliminary testing from the command line to ensure this model was able to make relatively accurate predictions, I proceeded to create a custom API for m final model usng FastAPI \
    so that my backend could make the call to this endpoint instead of the previous HuggingFace model.\n\n
    Once the FastAPI backend was set up, I integrated it into the PetPages web app by connecting the new endpoint to my Next.js (React + TypeScript) frontend. \
    This allowed the frontend to send images of pets to my custom model and receive predictions in real time, \
    creating a seamless experience compared to the earlier stages with prebuilt APIs. Through this process,\
     I not only gained hands-on experience with data cleaning, training computer vision models, and building custom APIs, \
     but also learned how important domain-specific datasets are for achieving meaningful results. Looking back, what started as a\
      simple attempt to plug an existing model into a web app became a full-stack project where I designed, trained, deployed, and integrated my own solution. \
      This journey gave me valuable insights into the end-to-end machine learning pipeline and deepened my curiosity for how specialized AI can be applied to \
      real-world challenges in healthcare.`,
  },
  // Add more blog posts here...
];

function Blog() {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const togglePost = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="min-h-screen relative overflow-hidden p-8 flex flex-col items-center">
      <div className="absolute inset-0 bg-[#1C5D99] -z-20"></div>
      <div className="opacity-50 absolute inset-0 -z-10">
        <img
          src={cloud3}
          alt="cloud"
          className="absolute bottom-10 right-10 animate-bounce-cloud"
          style={{ bottom: "5%", left: "45%", width: "800px" }}
        />

        <img
          src={cloud4}
          alt="cloud"
          className="absolute bottom-50 right-5 animate-bounce-slow opacity-50"
          style={{ width: "200px" }}
        />
        <img
          src={cloud5}
          alt="cloud"
          className="absolute top-12 left-2 animate-bounce-slow"
          style={{ width: "300px" }}
        />

        <img
          src={cloud2}
          alt="cloud"
          className="absolute top-30 left-20 animate-bounce-cloud opacity-45"
          style={{ top: "10%", left: "65%", width: "500px" }}
        />
        <img
          src={cloud4}
          alt="cloud"
          className="absolute top-10 left-20 animate-bounce-smaller"
          style={{ bottom: "10%", left: "80%", width: "400px" }}
        />
        <img
          src={cloud5}
          alt="cloud"
          className="absolute left-20 animate-bounce-smaller"
          style={{ bottom: "1%", left: "20%", width: "500px" }}
        />
        <img
          src={cloud4}
          alt="cloud"
          className="absolute animate-bounce-cloud"
          style={{ bottom: "30%", left: "5%", width: "200px" }}
        />

        <img
          src={cloud3}
          alt="cloud"
          className="absolute animate-bounce-slow opacity-80"
          style={{ top: "10%", left: "35%", width: "350px" }}
        />
      </div>
      <h1 className="text-white text-5xl mb-8 font-jersey">
        Here is a more in-depth view of the process for my projects
      </h1>

      <div className="w-full max-w-4xl space-y-6">
        {blogPosts.map(({ id, date, title, content }) => (
          <div
            key={id}
            onClick={() => togglePost(id)}
            className="cursor-pointer bg-black bg-opacity-40 rounded-lg p-4 text-white shadow-md hover:bg-opacity-50 transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{title}</h2>
              <span className="text-sm opacity-70">{date}</span>
            </div>

            {expandedPostId === id && (
              <p className="mt-4 whitespace-pre-line text-white">{content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
