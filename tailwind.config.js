module.exports = { 
  purge: {
      enabled: true,
      content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  },
  theme: {
      extend: {
          maxWidth: {
              contained: "1700px",
          },

          fontSize: {
              "base-heading-size": "20px",
              "base-copy-size": "18px",
          },
          textColor: {
              lightgray: "#828282"
          },

          colors: {
              yellow: "#FFE600",
              dkYellow: "#FFD600",
              black: "#000000",
              text: "#444444",
              bodyBg: "#E7E7E7",
              border: "#BDBDBD",
              bgElement: "#E3E3E3",
              screenGray: "#d5d5d5",
              

              overlay: "rgba(189,189,189,0.8)",
              overlayA: "rgba(0,0,0,0.6)",

              success: "#00c97a",
              error: "#FFC1C1",
          },

          screens: {
              xs: "414px",
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
              xxl: "1440px",
              xxxl: "1600px",
          },
      },

      fontFamily: {
          sans: [
              "Jeko-Regular",
              "system-ui",
              "-apple-system",
              "Helvetica Neue",
              "sans-serif",
          ],
          sansBold: [
              "Jeko-SemiBold",
              "system-ui",
              "-apple-system",
              "Helvetica Neue",
              "sans-serif",
          ],
          serif: [
              "Domaine-Display",
              "system-ui",
              "-apple-system",
              "Helvetica Neue",
              "sans-serif",
          ],
      },
      container: {
          center: true,
      }
  },
  variants: {
      opacity: ["responsive", "hover", "focus", "group-hover"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [
      
  ],
};
