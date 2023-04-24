import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classNames from 'classnames';

import styles from './WordsCard.module.scss';
import { Button } from '../ui/Button';
import { firstLetterUpperCase } from '../../helpers';

export type Word = {
  ru: string;
  en: string;
};

type WordsCardProps = {
  words: Word[];
  clickable?: boolean;
  onActiveWord?: (value: Word) => void;
  initialLang?: 'en' | 'ru';
};

export const WordsCard = (props: WordsCardProps) => {
  const { words, clickable, onActiveWord, initialLang = 'en' } = props;

  const [activeWord, setActiveWord] = React.useState(1);
  const [flipped, setFlipped] = React.useState(initialLang === 'en');

  React.useEffect(() => {
    onActiveWord?.(words[activeWord - 1]);
  }, [activeWord]);

  const cardClasses = classNames(styles.card, {
    [styles.flipped]: flipped,
    [styles.clickable]: clickable,
  });

  const shouldInstantFlip =
    (initialLang === 'en' && flipped) || (initialLang === 'ru' && !flipped);

  const handlePrev = () => {
    if (activeWord <= 1) return;
    setFlipped(initialLang === 'en');
    setTimeout(
      () => setActiveWord(activeWord - 1),
      shouldInstantFlip ? 0 : 100
    );
  };

  const handleNext = () => {
    if (activeWord >= words.length) return;
    setFlipped(initialLang === 'en');
    setTimeout(
      () => setActiveWord(activeWord + 1),
      shouldInstantFlip ? 0 : 100
    );
  };

  const handleClick = () => {
    if (!clickable) return;
    setFlipped(!flipped);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') handleClick();
    if (e.code === 'ArrowLeft') handlePrev();
    if (e.code === 'ArrowRight') handleNext();
  };

  return (
    <div className={styles['card-wrapper']}>
      <div className={styles.actions}>
        <Button
          startIcon={<ArrowBackIosNewIcon />}
          onClick={handlePrev}
          disabled={activeWord <= 1}
          className={classNames(styles['mini-button'], styles.override)}
          size="medium"
        >
          Prev
        </Button>

        <div className={styles.counter}>
          {activeWord}/{words.length}
        </div>

        <Button
          endIcon={<ArrowForwardIosIcon />}
          onClick={handleNext}
          disabled={activeWord >= words.length}
          className={classNames(styles['mini-button'], styles.override)}
          size="medium"
        >
          Next
        </Button>
      </div>

      <div
        role="button"
        tabIndex={clickable ? 0 : undefined}
        className={cardClasses}
        onClick={handleClick}
        onKeyDown={handleKeyUp}
      >
        {flipped ? (
          <div className={styles.back}>
            {firstLetterUpperCase(words[activeWord - 1].en)}
          </div>
        ) : (
          <div className={styles.front}>
            {firstLetterUpperCase(words[activeWord - 1].ru)}
          </div>
        )}
      </div>
    </div>
  );
};
