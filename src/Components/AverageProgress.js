import data from "../data.json";

const AverageProgress = () => {
  const newCount = [];

  // Je stocke dans un tableau newCount toutes les valeurs des progress
  {
    data.map((elem) => {
      newCount.push(elem.progress);
      return newCount;
    });
  }

  // Je fais un calcul pour additionner toutes les valeurs de mon tableau
  const count = (tab, func) => {
    let total = 0;
    for (let i = 0; i < tab.length; i++) {
      total = func(total, tab[i]);
    }
    return total;
  };

  const result = count(newCount, (previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  // Je calcule la moyenne de mon résultat (300) par le nombre de progress existantes.
  const moyenne = Math.ceil(result / newCount.length);

  return (
    <div className="average-progress">
      <p>
        Moyenne des progress de la todo list : <span>{moyenne} %</span>{" "}
      </p>
    </div>
  );
};

export default AverageProgress;
