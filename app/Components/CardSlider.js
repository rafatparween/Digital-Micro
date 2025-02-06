import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const products = [
  {
    category: "Best Seller Birthday Decorations",
    items: [
      { image: "/one.webp" },
      { image: "/two.webp" },
      { image: "/three.webp" },
      { image: "/four.webp" },
    ],
  },
  {
    category: "Welcome your Baby",
    items: [
      { image: "/five.webp" },
      { image: "/six.webp" },
      { image: "/seven.webp" },
      { image: "/eight.webp" },
    ],
  },
];

const CardSlider = () => {
  const allItems = products.flatMap((section) => section.items);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        padding: 3,
        marginTop: { xs: "-769px", sm: "-400px", md: "-200px", lg: "0px" }, // Responsive marginTop
        overflow: "hidden", // Hide overflow to create marquee effect
        whiteSpace: "nowrap", // Prevent line breaks
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          animation: "marquee 30s linear infinite", // Marquee animation
        }}
      >
        {allItems.map((item, idx) => (
          <Card
            key={idx}
            sx={{
              width: "200px",
              height: "200px",
              borderRadius: 4,
              overflow: "hidden",
              display: "inline-block",
              marginRight: 2, // Space between cards
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt="Event image"
              sx={{
                objectFit: "cover",
              }}
            />
          </Card>
        ))}
      </Box>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Box>
  );
};

export default CardSlider;