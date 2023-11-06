import React from "react";
import ObjectData from "../ObjectData";
export default function Home() {
    // 
    // This is our data in form of an object.
    const documents = {
        "pk": 1,
        "name": "COPIES Title - deeds OTHERS/1/MOHAMOOD MOHAMED EMAN/254.2",
        "images": 
        [
            {
                "num": "1",
                "url": "https://dev.mutall.co.ke/mashamba/v/images/COPIES%20Title%20-%20deeds%20OTHERS/1/img253.jpg",
                "name": "img253.jpg"
            }, 
            {
                "num": "2",
                "url": "https://dev.mutall.co.ke/mashamba/v/images/COPIES%20Title%20-%20deeds%20OTHERS/1/img254.jpg",
                "name": "img254.jpg"
            }, 
            {
                "num": "3",
                "url": "https://dev.mutall.co.ke/mashamba/v/images/COPIES%20Title%20-%20deeds%20OTHERS/1/img255.jpg",
                "name": "img255.jpg"
            }, 
            {
                "num": "4",
                "url": "https://dev.mutall.co.ke/mashamba/v/images/COPIES%20Title%20-%20deeds%20OTHERS/1/img256.jpg",
                "name": "img256.jpg"
            }
        ],
        "transcrption": 
        {
            "id": "COPIES Title - deeds OTHERS/1",
            "area": "254.2",
            "regno": "162/2 161/3 161/4 172/3 173/1",
            "person": "MOHAMOOD MOHAMED EMAN"
        }
    };
    return (
        <>
            {/* We pass our data to our component */}
            <ObjectData document_data={documents}/>
            <></>
        </>
    );
 }