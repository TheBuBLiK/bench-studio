const Main = () => {
  return (
    <div className="main__container">
      <div className="main__wrapper">
        <div className="main__up">
          <div className="main__up_wrapper">
            <div className="main__up_top">
              <img src="https://thumb.tildacdn.com/tild6232-3536-4664-a162-373438373064/-/format/webp/icon_price.png" />
              <p className="white">от 75 000 руб за 1 квадратный метр</p>
            </div>
            <p className="main__up_title white">
              Клубный дом <span className="gold"> Московская, 36 </span>
            </p>
            <p className="main__up_bottom white">
              Успейте приобрести квартиру в новостройке премиум класса в
              историческом центре Пензы
            </p>
          </div>
        </div>
        <div className="main__down">
          <p className="main__down_text gold">
            Передача ключей – IV квартал 2020 г.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
