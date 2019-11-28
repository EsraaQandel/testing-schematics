# MyTestProject

 ## Deployment status

The prototype is deployed in an Amazon S3 bucket and traffic is managed through a CloudFront distribution.

* CloudFront distribution ID: <cloud-front-id>
* CloudFront distribution URL: <cloud-front-url>
* S3 bucket name: my-test-project

 ## Deployment instructions

1. Compile the code by running the command `npm run build:prod`.
2. A `dist` folder will get created with all the files needed to run the project in any browser. Just point to the `index.html` file to run it.
3. Create an S3 bucket with public read permissions.
4. Upload the content of the `dist` folder to this bucket.
5. Create a CloudFront distribution and setup the S3 bucket as origin.
6. Make sure the distribution as the correct custom error responses: `404` not found and `403` forbidden should redirect to `/index.html` and set the response code to `200`.
7. Create an invalidation with Object Path set to `/*` to invalidate the cache if needed.
8. That's it. The prototype can be accessed at the distribution's Domain Name.
