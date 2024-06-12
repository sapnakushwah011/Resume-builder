import React, { useRef } from "react";
import styles from "./Header.module.css";
import resume from "../../assets/Resume.svg";
import { ArrowRight } from "react-feather";
import TemplateSelector from "../../TemplateComponent/TemplateSelector";
import { Button } from "react-bootstrap";

const Header = () => {
  const ref = useRef(null);

  return (
    <>
      <div className={styles.container}>
        <div style={styles.left}>
          <p className={styles.heading}>
            A <span> Resume </span> that makes you better
          </p>
          <p className={styles.heading}>
            Make your own Resume. <span> It's Free </span>
          </p>

          <Button
            className={styles.button}
            onClick={() => {
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <b>
              CREATE MY RESUME
              <ArrowRight />
            </b>
          </Button>
        </div>

        <div className={styles.right}>
          <img src={resume} alt="Resume" />
        </div>
      </div>

      <div className={styles.template}>
        <TemplateSelector ref={ref} text="Select Template"/>
      </div>
    </>
  );
};

export default Header;
