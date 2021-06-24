const config = {
  STRIPE_KEY: "pk_test_51Iamf2K0VADcN2Tqmkl44j9z6lJEVF5dGh9ws0UqhuGEC0lmOIkjrAkJUGB0FY89SSZ69GDILANQNQXw8Qpm9G4a00dzWqZZV4",
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-west-2",
      BUCKET: "user-app-uploads",
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://agj9rxrqia.execute-api.eu-west-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_fyBbz8zpo",
      APP_CLIENT_ID: "2qdc2u7iljvel9mnvhvb71f8ts",
      IDENTITY_POOL_ID: "eu-west-2:1bb77558-9dfd-4b31-8379-72be1b5ccfc9",
    },
  };

  export default config;