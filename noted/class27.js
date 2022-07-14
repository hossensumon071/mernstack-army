// Frontend Core Concepts and Communication

/*
   আমরা application এর  client কারা হতে পারে আসুন দেখে আসি
         1. Front end App
         2. Mobile App
         3. Desktop App
         4. IOT App
         any divce 

    database এর client হচ্ছে backend আর backend এর client হচ্ছে Front-end 

    Backend API সে সবাইকে JSON দিচ্ছে। মানে backend application frontend application কে JSON দিচ্ছে। 
    client আমার যে কেউ হতে পারে কিন্ত server বা backend একজন ই 

    যখন আমরা একটা REST API বানাচ্ছি তখন আমরা একটা অংশ শেষ। 

    frontend application এ থাকে কি । 
    
    প্রথমে থাকে হচ্ছে একটা reprsentation layer । reprsentation layer বলতে বুঝানো হচ্ছে যেখানে আমরা একটা application কে দেখতে পাই মানে UI । 

    এরপর আসে হচ্ছে Data layer  । 

    এরপর আসে হচ্ছে Logical layer  । Data layer থেকে Data নেও তারপর সেটা logical layer মাদ্ধ্যমে reprsenation layer নিয়ে যাও । আবার Ui layer থেকে user কিছু একটা input দিল তারপর সেটা logical layer নিল logical layer সেটা কে process করে আবার সেটা কে Data layer পাঠিয়ে দিল । 


    এরপর আসে হচ্ছে Network Layer। Network layer কি করবে logical layer এর সাথে সরাসরি সম্প্রিক্ত থেকে যেই data গুলো তে আমরা server এর সাথে commiunication ধরকার , সেই commiunication গুলো স্থাপন করবে Networking Layer । এই একটা মাএ লেয়ার যেটার মাদ্ধ্যমে আমরা backend and frontend এর সাথে যুক্ত। 

    তাহলে আমাদের front end application total 4 টা জিনিস এর কাজ রয়েছে 
             reprsentaion layer ---> Data layer ---> Logical Layer ---> Networking layer 

    In Summery আমরা বলতে পারি ---> 
         backend থেকে somehow আমার কাছে Data আসল । Backend থেকে Data আসল হচ্ছে Network layer মাদ্ধ্যমে ,Network layer মাদ্ধ্যমে data নিয়ে এসে backend থেকে, logical layer এ  আবার data গুলা সুন্দর করে process করে data layer মদ্ধ্যে রাখব । যেন data layer পরবর্তীতে process করার মাদ্ধ্যমে আমরা represntation layer যেন আমরা সুন্দর করে দেখাতে পারি । তারপর represntation layer থেকে data নিয়ে সে data টা Network layer ব্যাবহার করে backend api বা database এর কাছে পোওছে দিতে পারি 
*/