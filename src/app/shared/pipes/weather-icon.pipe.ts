import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'weatherIcon',
    pure: true
})
export class WeatherIconPipe implements PipeTransform {
    static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

    transform(id: number): string {
        if (id >= 200 && id <= 232)
            return WeatherIconPipe.ICON_URL + "art_storm.png";
        else if (id >= 501 && id <= 511)
            return WeatherIconPipe.ICON_URL + "art_rain.png";
        else if (id === 500 || (id >= 520 && id <= 531))
            return WeatherIconPipe.ICON_URL + "art_light_rain.png";
        else if (id >= 600 && id <= 622)
            return WeatherIconPipe.ICON_URL + "art_snow.png";
        else if (id >= 801 && id <= 804)
            return WeatherIconPipe.ICON_URL + "art_clouds.png";
        else if (id === 741 || id === 761)
            return WeatherIconPipe.ICON_URL + "art_fog.png";
        else
            return WeatherIconPipe.ICON_URL + "art_clear.png";
    }
}
