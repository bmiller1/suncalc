/*
 SunCalc is a JavaScript library for calculating sun/moon position and light phases.
 https://github.com/mourner/suncalc
*/

interface SunCalc
{
	getPosition(date: Date, latitude: number, longitude: number): SunCalcPosition;
	/** Adds a custom time when the sun reaches the given angle to results returned by SunCalc.getTimes. */
	addTime(angle: number, riseName: string, setName: string)
	getTimes(date: Date, latitude: number, longitude: number): SunCalcSunTimes;
	getMoonPosition(date: Date, latitude: number, longitude: number): SunCalcPosition;
	getMoonIllumination(date: Date): SunCalcIllumination;
	getMoonTimes(date: Date, latitude: number, longitude: number): SunCalcMoonTime;
}

interface SunCalcSunTimes
{
	/** Morning nautical twilight ends, morning civil twilight starts */
	dawn: Date;
	/** Evening nautical twilight starts */
	dusk: Date;
	goldenHour: Date;
	/** Morning golden hour (soft light, best time for photography) ends */
	goldenHourEnd: Date;
	/** Darkest moment of the night, sun is in the lowest position */
	nadir: Date;
	/** Morning nautical twilight starts */
	nauticalDawn: Date;
	/** Evening astronomical twilight starts */
	nauticalDusk: Date;
	/** Night starts (dark enough for astronomical observations) */
	night: Date;
	/** Morning astronomical twilight starts */
	nightEnd: Date;
	/** Sun is in the highest position */
	solarNoon: Date;
	/** Top edge of the sun appears on the horizon */
	sunrise: Date;
	/** Bottom edge of the sun touches the horizon */
	sunriseEnd: Date;
	/** Sun disappears below the horizon, evening civil twilight starts */
	sunset: Date;
	/** Bottom edge of the sun touches the horizon */
	sunsetStart: Date;
}

interface SunCalcMoonTime
{
	/** Moonrise time */
	rise?: Date;
	/** Moonset time */
	set?: Date;
	/** true if the moon never rises/sets and is always above the horizon during the day */
	alwaysUp?: boolean;
	/** true if the moon is always below the horizon */
	alwaysDown?: boolean;
}

interface SunCalcSunTime
{
	angle: number;
	riseName: string;
	setName: string;
}

interface SunCalcIllumination
{
	/**  illuminated fraction of the moon; varies from 0.0 (new moon) to 1.0 (full moon) */
	fraction: number;
	/** moon phase; varies from 0.0 to 1.0, described below */
	phase: number;
	/** midpoint angle in radians of the illuminated limb of the moon reckoned eastward from the north point of the disk; the moon is waxing if the angle is negative, and waning if positive */
	angle: number;
}

interface SunCalcPosition
{
	/** sun azimuth in radians (direction along the horizon, measured from south to west), e.g. 0 is south and Math.PI * 3/4 is northwest */
	azimuth: number;
	/** sun altitude above the horizon in radians, e.g. 0 at the horizon and PI/2 at the zenith (straight over your head) */
	altitude: number;
	/** distance in kilometers */
	distance?: number;
}

declare var SunCalc: SunCalc;
