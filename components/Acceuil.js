import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';

const getRainbowColor = () => {
  const colors = [
   '#81E73F',
    '#F5F05D',
    '#F9B141',
    '#36D6EC',
    '#A783D8',
    '#ADFF2F',
    '#FC3143',
    '#8F00FF',
    '#FF69B4',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const specialiteColors = {};

export default function Acceuil() {
  const [numProfsInscrits, setNumProfsInscrits] = useState(0);
  const [specialites, setSpecialites] = useState([]);
  const [villesDemandees, setVillesDemandees] = useState([]);
  const [numProfsParGrade, setNumProfsParGrade] = useState([]);

 useEffect(() => {
  fetch('https://tiny-worm-nightgown.cyclic.app/professeurs')
    .then(response => response.json())
    .then(data => {
      setNumProfsInscrits(data.length);
      setSpecialites(computeSpecialites(data));
      setVillesDemandees(computeVillesDemandees(data));
      setNumProfsParGrade(computeNumProfsParGrade(data));
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    });
}, []);


  const computeSpecialites = (data) => {
    const specialitesCount = {};
    data.forEach((prof) => {
      const specialite = prof.specialite;
      if (specialite in specialitesCount) {
        specialitesCount[specialite] += 1;
      } else {
        specialitesCount[specialite] = 1;
      }
    });
    
    return Object.entries(specialitesCount)
      .map(([label, value]) => ({
        label,
        value,
      }))
      .sort((a, b) => b.value - a.value) // Tri par ordre décroissant du nombre de professeurs par spécialité
      .slice(0, 15); // Sélection des 15 premières spécialités
  };

  const computeVillesDemandees = (data) => {
  const villesCount = {};
  data.forEach((prof) => {
    const villeDemandee = prof.villeDesiree;
    if (villeDemandee in villesCount) {
      villesCount[villeDemandee] += 1;
    } else {
      villesCount[villeDemandee] = 1;
    }
  });

  return Object.entries(villesCount)
    .map(([label, value]) => ({
      label,
      value,
    }))
    .sort((a, b) => b.value - a.value) // Trie par ordre décroissant du nombre de demandes
    .slice(0, 15); // Sélection des 15 premières villes
};


  const computeNumProfsParGrade = (data) => {
    const gradesCount = {};
    data.forEach((prof) => {
      const grade = prof.grade;
      if (grade in gradesCount) {
        gradesCount[grade] += 1;
      } else {
        gradesCount[grade] = 1;
      }
    });
    return Object.entries(gradesCount).map(([label, value]) => ({
      label,
      value,
    }));
  };

 const renderPieChart = (data, isTop15) => {
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  const squareOffset = 90; // Définir la distance entre les carreaux et les graphes

  let total = 0;
  data.forEach((item) => {
    total += item.value;
  });

  let startAngle = 0;
  const arcs = data.map((item) => {
    const endAngle = startAngle + (item.value / total) * 360;

    const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    const pathData = `M${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} L${centerX},${centerY}`;

    const arc = (
      <Path key={item.label} d={pathData} fill={getRainbowColor()} />
    );

    startAngle = endAngle;

    return arc;
  });

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>
        {isTop15 ? 'Nombre de profs par spécialité (Top 15)' : 'Villes les plus demandées (Top 15)'}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Svg width="200" height="200">
            <Circle cx={centerX} cy={centerY} r={radius} fill="#ffffff" />
            {arcs}
          </Svg>
        </View>
        <View style={{ flex: 1 }}>
          {data.map((item, index) => (
            <View
              key={index}
              style={[
                styles.colorSquare,
                {
                  backgroundColor: getRainbowColor(),
                  marginLeft: squareOffset, // Ajouter la marge à gauche du carreau
                },
              ]}
            >
              <Text style={styles.colorLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

return (
  <ScrollView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Statisqtiques</Text>
      <Text style={styles.infoText}>Nombre de profs inscrits : {numProfsInscrits}</Text>

      {renderPieChart(specialites, true)}

      {villesDemandees.length > 0 ? (
        renderPieChart(villesDemandees, false)
      ) : (
        <Text>Aucune donnée disponible pour les villes demandées.</Text>
      )}

      {renderPieChart(numProfsParGrade, true)}

      <View style={styles.statContainer}>
        <Text style={styles.statTitle}>Top 15 des spécialités</Text>
        {specialites.map((item, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statLabel}>{item.label}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.statContainer}>
        <Text style={styles.statTitle}>Villes les plus demandées</Text>
        {villesDemandees.length > 0 ? (
          <View style={styles.statContainer}>
            {villesDemandees.map((item, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statLabel}>{item.label}</Text>
                <Text style={styles.statValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>Aucune donnée disponible pour les villes demandées.</Text>
        )}
      </View>

      <View style={styles.statContainer}>
        <Text style={styles.statTitle}>Nombre de profs par grade</Text>
        {numProfsParGrade.map((item, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statLabel}>{item.label}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF0F5',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 26,
    marginBottom: 16,
        fontWeight: 'bold',
  },
  chartContainer: {
    marginBottom: 24,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statContainer: {
    marginTop: 24,
  },
  statTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 colorSquare: {
  width: 70,
  height: 16,
},

  colorLabel: {
    fontSize: 12,
  },

});