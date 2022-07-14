// problem solvers Caffe (PS Caffe) 

    //PS caffe is an imaginary online coffee delivery service. This business is designed specially for proggrammers by keeping their life style in mind. We need an application to accept orders from online.The application will have the following functional and non-functional requirements 


    // Special Notes: We are not planning to grow fast. We need an MVP(Minimal vaible Product) or Workalbe prototype to research our target market.

          // functional Requirments 
                // 1. Local Authentication
                        // at the begining we dont want to spend more on authentication services. Just keep it simple by implementing a local authentication using email & password. But make sure we can extend local auth to Oauth2 anytime in future. We need the following features.
                            // .Hased Password
                            // .Email verification
                            // .forget password
                            // .block user if neccessary
                // 2. Multiple Rules
                        // .Ther mailny five rules
                            // 1. Admin: admin can create and manage everything including sales data 
                            // 2. Manager: manager cant be able to create anything but can see sales data, inventory and Products
                            // 3. chef: They can only see queue orders
                            // 4. DeliverMan: They can manage the orders and change states
                            // 4. User: wont be able to see any admin information but able to check products, reviews and place orders
                // 3. User will be able to place orders
                // 4. User will be able see existing reviews and only place review after a successful order
                // 5. Sales Dashboard
                // 6. Live tracking of the order 

           // Non functional Requirments 
                // 1. Secure 
                // 2. reliable
                // 3. easy maintainable
                // 4. awesome usability 
                // 5. hihgh abilability(not main concern for map)
                // 5. scalabilty (not main concern for map)






//  Choose Necessary Technology
    // Requirements: (SRS - Software Requirements Specification)
        //  .Google Docs, Microsoft Office, Notion
        //  .Draw.io, Lucid Chart


    // Requirements Analaysis And Design
        //  .Software Architecture
               //.Architectural Desicion
                    // .Monolithic (Layered)
                          // Easy to develop, But very complex to maintain when application grows.
                    // .Microservice
                          // very hard to develop, but easy to maintain
                    // .Serverless(Faas - Function as a service)
               //.Select Database
                    //.SQL
                         // Postgre SQL
                         // MYSQL
                    //.NoSQL
                         // .MongoDB
                         // .Casandra
                    //.Key Value 
                         // .Redis
                         // .DynamoDB
                    // .Graph Database
                         // .Neo4j
                    // .Search Database
                        //  .Elastic Search(Open Sourch - Full text Search)
                        //  .Algolia Search(Open AI 3 - Netural Language Processing)
        //  .Syestem Design
               // .OOP
               // .OOP Design Pattern And Principles
               // .DSA
               // .Clean Code architecture
               // .Problem Solving
        //  .Testing
        //  .Distribution
                 //.DevOps
                 //.Cloud Engineering
                    // VPC(vertual Private CLouding)
        //  .Maintanence
     
/*
Our Decision for PS Caffe: 
   .Architecture - Monolithic
   .Database - (MongoDB Atlas)
   .Backend - Nodejs (Express, Hapi, Fastify)(MVC)


Steps - 
      - Requirements
      - Design
      - Implementation
          .UI/UX Design
          .Web Design
          .Frontend Development
          .Backend Development
          .Test code
      - Testing, Deployment
      - Maintanence

*/