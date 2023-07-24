import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Card from '../components/Card';
import React, {useEffect, useState} from 'react';
import res from '../res';
import ResetButton from '../components/ResetButton';

const GameScreen = () => {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(true);
  const [cards, setCards] = useState<any>([
    {
      id: 1,
      src: res.icons.skoda,
      name: 'Skoda',
    },
    {
      id: 2,
      src: res.icons.porsche,
      name: 'Porsche',
    },
    {
      id: 3,
      src: res.icons.moon,
      name: 'Moon',
    },
  ]);

  function randomize(values: any) {
    let index = values.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (index !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;

      // And swap it with the current element.
      [values[index], values[randomIndex]] = [
        values[randomIndex],
        values[index],
      ];
    }
    return values;
  }

  useEffect(() => {
    console.log(loading);

    (async function () {
      try {
        const randomizedCards = await randomize(cards);
        setCards(randomizedCards);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
    console.log(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  return (
    <>
      {selected && <ResetButton />}
      <SafeAreaView style={styles.cardsWrapper}>
        {loading === false ? (
          cards.map((card: any, index: any) => {
            return (
              <Card
                key={index}
                prize={card}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })
        ) : (
          <Text>Loading</Text>
        )}
      </SafeAreaView>
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  cardsWrapper: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
});
