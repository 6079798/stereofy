import { tns } from "tiny-slider/src/tiny-slider";

const liveSlider = tns({
  container: ".live .live__items",
  nav: false,
  preventScrollOnTouch: "auto",
  cancelable: true,
  mouseDrag: true,
  items: 1,
  slideBy: "page",
  gutter: 15,
  responsive: {
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
});

const podcastsSlider = tns({
  container: ".podcasts .podcasts__items",
  nav: true,
  navPosition: "bottom",
  controls: false,
  preventScrollOnTouch: "auto",
  cancelable: true,
  touch: false,
  items: 1,
  slideBy: "page",
  gutter: 30,
  responsive: {
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      disable: true
    }
  }
});

const broadcastsSlider = tns({
  container: ".broadcasts .broadcasts__slides",
  navContainer: ".broadcasts .broadcasts__days",
  preventScrollOnTouch: "auto",
  cancelable: true,
  items: 1,
  slideBy: "page",
  gutter: 50
});

const storySlider = tns({
  container: ".story .story__slides",
  nav: false,
  preventScrollOnTouch: "auto",
  cancelable: true,
  mouseDrag: true,
  items: 1,
  slideBy: "page",
  gutter: 30,
  responsive: {
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});

const tabs = document.querySelectorAll(".chart__tab");
const contentContainer = document.querySelector(".chart__content");
const tabsContent = document.querySelectorAll("[data-tab]");

tabs.forEach(tab => {
  tab.addEventListener("click", ({ currentTarget }) => {
    const content = contentContainer.querySelector(
      `[data-tab="${currentTarget.dataset.tab}"]`
    );
    if (!content) return;
    tabs.forEach(tab => tab.classList.remove("chart__tab--active"));
    currentTarget.classList.add("chart__tab--active");
    tabsContent.forEach(content =>
      content.classList.remove("chart__item--active")
    );
    content.classList.add("chart__item--active");
  });
});
