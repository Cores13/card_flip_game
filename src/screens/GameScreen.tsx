import {StyleSheet, View, Text} from 'react-native';
import Card from '../components/Card';
import React, {useEffect, useState} from 'react';
import res from '../res';
import ResetButton from '../components/ResetButton';

const GameScreen = () => {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [prize, setPrize] = useState([]);
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
    (async function () {
      try {
        const randomizedCards = await randomize(cards);
        setCards(randomizedCards);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      {showReset && <ResetButton prize={prize} />}
      <View style={styles.cardsWrapper}>
        {loading === false ? (
          cards.map((card: any, index: any) => {
            return (
              <Card
                key={index}
                prize={card}
                selected={selected}
                setSelected={setSelected}
                setShowReset={setShowReset}
                setPrize={setPrize}
              />
            );
          })
        ) : (
          <Text>Loading</Text>
        )}
      </View>
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
