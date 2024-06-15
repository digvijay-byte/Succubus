function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
     ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
      ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
     ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
     ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
     ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
      ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
     ./female1.png
     ./female2.png
     ./female3.png
     ./female4.png
     ./female5.png
     ./female6.png
     ./female7.png
     ./female8.png
     ./female9.png
     ./female10.png
     ./female11.png
     ./female12.png
     ./female13.png
     ./female14.png
     ./female15.png
     ./female16.png
     ./female17.png
     ./female18.png
     ./female19.png
     ./female20.png
     ./female21.png
     ./female22.png
     ./female23.png
     ./female24.png
     ./female25.png
     ./female26.png
     ./female27.png
     ./female28.png
     ./female29.png
     ./female30.png
     ./female31.png
     ./female32.png
     ./female33.png
     ./female34.png
     ./female35.png
     ./female36.png
     ./female37.png
     ./female38.png
     ./female39.png
     ./female40.png
     ./female41.png
     ./female42.png
     
     
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})