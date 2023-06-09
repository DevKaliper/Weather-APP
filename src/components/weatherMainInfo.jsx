/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function WeatherMainInfo({ weather }) {
  return (
    <div>
        <div>Alert! is not connected to API yet!!!</div>
      <div>City: {weather?.location.name}</div>
      <div> Country: {weather?.location.country}</div>
      <div className="weatherCondition">
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>temp: {weather?.current.temp_c}°</div>
        </div>
      </div>

      <iframe
      title="map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d214000.51545253964!2d${weather?.location.lon}!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spa!4v1682277728340!5m2!1ses!2spa`}
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
}
