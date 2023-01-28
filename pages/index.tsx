import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "Hello Saower" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div
        className="text-7xl mb-8 gradient-text"
        variants={text_reveal}
      >
        {text.content}
      </motion.div>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
            I'm a  Software engineer , I love to develop
            and many times I realize that 0 & 1  are part
            of our life. ✨.
          </motion.p>
            <motion.p
                variants={text_reveal_fade}
                style={{ lineHeight: "2.1rem", fontSize: "17px" }}
            >
                我是一名实施运维工程师，专注于Devops、项目管理、敏捷、和自动化运维。我喜欢旅行，至今我已经走过了中国上百座城市；我喜欢爬山，至今我已经登上西岳华山、
                北岳恒山、东岳泰山；很多时候我觉得，行万里路胜过读万卷书；旅行让我看遍世间千万种风土人情、听闻世间千万种人生故事！
            </motion.p>




        </motion.div>

        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
