import Util from '../utils/Util';
import Zone from './Zone';
import { ZONE_TYPE_POINT as type } from './types';
export default class PointZone extends Zone {
  /**
   * PointZone is a point zone
   * @param {Number|Vector3D} x - the center's x value or a Vector3D Object
   * @param {Number} y - the center's y value
   * @param {Number} z - the center's z value
   * @example
   * var pointZone = new System.PointZone(0,30,10);
   * or
   * var pointZone = new System.PointZone(new System.Vector3D(0,30,10));
   * @extends {Zone}
   * @constructor
   */
  constructor(a, b, c) {
    super(type); // TODO see below, these should probably be assigned properly
    // eslint-disable-next-line

    var x, y, z;

    if (Util.isUndefined(a, b, c)) {
      x = y = z = 0;
    } else {
      x = a; // eslint-disable-next-line

      y = b; // eslint-disable-next-line

      z = c;
    }

    this.x = x; // TODO shouldn't this be set to y?

    this.y = x; // TODO shouldn't this be set to z?

    this.z = x;
    this.supportsCrossing = false;
  }
  /**
   * Returns true to indicate this is a PointZone.
   *
   * @return {boolean}
   */


  isPointZone() {
    return true;
  }

  getPosition() {
    this.vector.x = this.x;
    this.vector.y = this.y;
    this.vector.z = this.z;
    return this.vector;
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy96b25lL1BvaW50Wm9uZS5qcyJdLCJuYW1lcyI6WyJVdGlsIiwiWm9uZSIsIlpPTkVfVFlQRV9QT0lOVCIsInR5cGUiLCJQb2ludFpvbmUiLCJjb25zdHJ1Y3RvciIsImEiLCJiIiwiYyIsIngiLCJ5IiwieiIsImlzVW5kZWZpbmVkIiwic3VwcG9ydHNDcm9zc2luZyIsImlzUG9pbnRab25lIiwiZ2V0UG9zaXRpb24iLCJ2ZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLElBQVAsTUFBaUIsZUFBakI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsU0FBU0MsZUFBZSxJQUFJQyxJQUE1QixRQUF3QyxTQUF4QztBQUVBLGVBQWUsTUFBTUMsU0FBTixTQUF3QkgsSUFBeEIsQ0FBNkI7QUFDMUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VJLEVBQUFBLFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVTtBQUNuQixVQUFNTCxJQUFOLEVBRG1CLENBR25CO0FBQ0E7O0FBQ0EsUUFBSU0sQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVY7O0FBRUEsUUFBSVgsSUFBSSxDQUFDWSxXQUFMLENBQWlCTixDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLENBQUosRUFBK0I7QUFDN0JDLE1BQUFBLENBQUMsR0FBR0MsQ0FBQyxHQUFHQyxDQUFDLEdBQUcsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMRixNQUFBQSxDQUFDLEdBQUdILENBQUosQ0FESyxDQUVMOztBQUNBSSxNQUFBQSxDQUFDLEdBQUdILENBQUosQ0FISyxDQUlMOztBQUNBSSxNQUFBQSxDQUFDLEdBQUdILENBQUo7QUFDRDs7QUFFRCxTQUFLQyxDQUFMLEdBQVNBLENBQVQsQ0FqQm1CLENBbUJuQjs7QUFDQSxTQUFLQyxDQUFMLEdBQVNELENBQVQsQ0FwQm1CLENBc0JuQjs7QUFDQSxTQUFLRSxDQUFMLEdBQVNGLENBQVQ7QUFDQSxTQUFLSSxnQkFBTCxHQUF3QixLQUF4QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0VDLEVBQUFBLFdBQVcsR0FBRztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUVEQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixTQUFLQyxNQUFMLENBQVlQLENBQVosR0FBZ0IsS0FBS0EsQ0FBckI7QUFDQSxTQUFLTyxNQUFMLENBQVlOLENBQVosR0FBZ0IsS0FBS0EsQ0FBckI7QUFDQSxTQUFLTSxNQUFMLENBQVlMLENBQVosR0FBZ0IsS0FBS0EsQ0FBckI7QUFFQSxXQUFPLEtBQUtLLE1BQVo7QUFDRDs7QUF2RHlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbHMvVXRpbCc7XG5pbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xuaW1wb3J0IHsgWk9ORV9UWVBFX1BPSU5UIGFzIHR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBQb2ludFpvbmUgaXMgYSBwb2ludCB6b25lXG4gICAqIEBwYXJhbSB7TnVtYmVyfFZlY3RvcjNEfSB4IC0gdGhlIGNlbnRlcidzIHggdmFsdWUgb3IgYSBWZWN0b3IzRCBPYmplY3RcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB0aGUgY2VudGVyJ3MgeSB2YWx1ZVxuICAgKiBAcGFyYW0ge051bWJlcn0geiAtIHRoZSBjZW50ZXIncyB6IHZhbHVlXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBwb2ludFpvbmUgPSBuZXcgU3lzdGVtLlBvaW50Wm9uZSgwLDMwLDEwKTtcbiAgICogb3JcbiAgICogdmFyIHBvaW50Wm9uZSA9IG5ldyBTeXN0ZW0uUG9pbnRab25lKG5ldyBTeXN0ZW0uVmVjdG9yM0QoMCwzMCwxMCkpO1xuICAgKiBAZXh0ZW5kcyB7Wm9uZX1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICAvLyBUT0RPIHNlZSBiZWxvdywgdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIGFzc2lnbmVkIHByb3Blcmx5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdmFyIHgsIHksIHo7XG5cbiAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZChhLCBiLCBjKSkge1xuICAgICAgeCA9IHkgPSB6ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IGE7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIHkgPSBiO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICB6ID0gYztcbiAgICB9XG5cbiAgICB0aGlzLnggPSB4O1xuXG4gICAgLy8gVE9ETyBzaG91bGRuJ3QgdGhpcyBiZSBzZXQgdG8geT9cbiAgICB0aGlzLnkgPSB4O1xuXG4gICAgLy8gVE9ETyBzaG91bGRuJ3QgdGhpcyBiZSBzZXQgdG8gej9cbiAgICB0aGlzLnogPSB4O1xuICAgIHRoaXMuc3VwcG9ydHNDcm9zc2luZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB0byBpbmRpY2F0ZSB0aGlzIGlzIGEgUG9pbnRab25lLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNQb2ludFpvbmUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnZlY3Rvci54ID0gdGhpcy54O1xuICAgIHRoaXMudmVjdG9yLnkgPSB0aGlzLnk7XG4gICAgdGhpcy52ZWN0b3IueiA9IHRoaXMuejtcblxuICAgIHJldHVybiB0aGlzLnZlY3RvcjtcbiAgfVxufVxuIl19