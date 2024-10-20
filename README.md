# Learning Next.js routing

This repository is a hands-on project where I am learning and experimenting with **Next.js routing**.

## Route Mapping

This diagram shows how the folder structure maps to the routing system in the browser:

![nextjs-routing_](https://github.com/user-attachments/assets/469daa23-db03-48bb-ac82-46eaaa723448)

## Folder Structure

Folder structure of my Next.js app, which illustrates the organization of routes:

![nextrouting](https://github.com/user-attachments/assets/44c32535-c749-4dc5-a5a8-7eb5c7f21b1d)

## Key Concepts

- **Dynamic Routing**: Routes like `/products/[productId]` and `/products/[productId]/reviews/[reviewId]` are dynamically handled based on the folder and file structure.
- **Grouped Routes**: The authentication-related routes are grouped under `(authgrouped)` for better organization.
- **Nested Routes**: Nested routes are used for reviews under products, such as `/products/[productId]/reviews/[reviewId]`.
