import { motion } from "motion/react";
import * as S from "../Style";
import BFutebol from "../img/icon-bola-de-futebol.png";
import BBasquete from "../img/icon-basquete.png";
import Bass from "../img/icon-bass.png";
import Bvolei from "../img/icon-voleibol.png";
import pecaXadrez from "../img/icon-xadrez.png";
import Programacao from "../img/icon-programação.png";
export default function BoxAnimations() {
  return (
    <S.boxAnimations>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 800, top: 0, bottom: 0 }}
        animate={{ x: [1200, -300, 0], opacity: [0, 1, 0, 1] }}
        initial={{ x: 300, opacity: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <img src={BFutebol} alt="imagem de uma bola de futebol" />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 600, top: 0, bottom: 0 }}
        animate={{ x: [1200, -300, 0], y: [-200, 0], opacity: [0, 1, 0, 1] }}
        initial={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      > 
        <img src={BBasquete} alt="imagem de uma bola de basquete" />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 600, top: 0, bottom: 0 }}
        animate={{ x: 0, y: [-700, 0, -30, 0], opacity: [0, 1] }}
        initial={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <img src={Bvolei} alt="imagem de uma bola de volei" />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -700, right: 0, top: 0, bottom: 0 }}
        animate={{ x: 0, y: [-700,0,-30, 0], opacity: [0, 1] }}
        initial={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <img src={Bass} alt="imagem de um contrabaixo" />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -700, right: 0, top: 0, bottom: 0 }}
        animate={{ x: [-1000, 300, 0], y: [-200, 0], opacity: [0, 1, 0, 1] }}
        initial={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src={pecaXadrez} alt="imagem de uma peça de xadrez" />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -700, right: 0, top: 0, bottom: 0 }}
        animate={{ x: [-1000, 300, 0], opacity: [0, 1, 0, 1] }}
        initial={{ x: 300, opacity: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <img
          src={Programacao}
          alt="imagem de um pc com um simbolo de codigo na tela"
        />
      </motion.div>
    </S.boxAnimations>
  );
}
