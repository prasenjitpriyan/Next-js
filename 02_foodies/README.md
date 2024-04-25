# Storing Uploaded Images In The Cloud (AWS S3)

As explained in the previous lecture, storing uploaded files (or any other files that are generated at runtime) on the local filesystem is not a great idea - because those files will simply not be available in the running NextJS applications.

Instead, it's recommended that you store such files (e.g., uploaded images) via some cloud file storage - like AWS S3.

AWS S3 is a service provided by AWS which allows you to store and serve (depending on its configuration) files. You can get started with this service for free but you should check out its pricing page to avoid any unwanted surprises.

In this lecture, I'll explain how you could use AWS S3 to store uploaded users images & serve them on the NextJS website.
