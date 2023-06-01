// Primitives
export const DEFAULT_MAX_PARTICLES = 10000;
export const VECTOR_3_SIZE = ['x', 'y', 'z'].length;
export const RGBA_SIZE = ['r', 'g', 'b', 'a'].length;
export const FLOAT_BYTE_SIZE = 4; // Byte sizes

export const POSITION_BYTE_SIZE = VECTOR_3_SIZE * FLOAT_BYTE_SIZE;
export const SIZE_BYTE_SIZE = FLOAT_BYTE_SIZE;
export const RGBA_BYTE_SIZE = RGBA_SIZE * FLOAT_BYTE_SIZE;
export const ALL_BYTE_SIZES = [POSITION_BYTE_SIZE, SIZE_BYTE_SIZE, RGBA_BYTE_SIZE];
export const PARTICLE_BYTE_SIZE = ALL_BYTE_SIZES.reduce((cur, acc) => cur + acc); // Attributes

export const POSITION_ATTRIBUTE_BUFFER_SIZE = VECTOR_3_SIZE;
export const SIZE_ATTRIBUTE_BUFFER_SIZE = 1;
export const RGBA_ATTRIBUTE_BUFFER_SIZE = RGBA_SIZE;
export const ALPHA_ATTRIBUTE_BUFFER_SIZE = 1;
export const TEXID_ATTRIBUTE_BUFFER_SIZE = 2;
export const ATTRIBUTE_TO_SIZE_MAP = {
  position: POSITION_ATTRIBUTE_BUFFER_SIZE,
  size: SIZE_ATTRIBUTE_BUFFER_SIZE,
  // THREE.Color does not contain alpha, so we will have separate attributes for these
  color: RGBA_ATTRIBUTE_BUFFER_SIZE,
  alpha: ALPHA_ATTRIBUTE_BUFFER_SIZE,
  texID: TEXID_ATTRIBUTE_BUFFER_SIZE
};
export const PARTICLE_STRIDE = [POSITION_ATTRIBUTE_BUFFER_SIZE, SIZE_ATTRIBUTE_BUFFER_SIZE, RGBA_ATTRIBUTE_BUFFER_SIZE, ALPHA_ATTRIBUTE_BUFFER_SIZE, TEXID_ATTRIBUTE_BUFFER_SIZE].reduce((cur, acc) => cur + acc);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9HUFVSZW5kZXJlci9jb21tb24vUGFydGljbGVCdWZmZXIvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTUFYX1BBUlRJQ0xFUyIsIlZFQ1RPUl8zX1NJWkUiLCJsZW5ndGgiLCJSR0JBX1NJWkUiLCJGTE9BVF9CWVRFX1NJWkUiLCJQT1NJVElPTl9CWVRFX1NJWkUiLCJTSVpFX0JZVEVfU0laRSIsIlJHQkFfQllURV9TSVpFIiwiQUxMX0JZVEVfU0laRVMiLCJQQVJUSUNMRV9CWVRFX1NJWkUiLCJyZWR1Y2UiLCJjdXIiLCJhY2MiLCJQT1NJVElPTl9BVFRSSUJVVEVfQlVGRkVSX1NJWkUiLCJTSVpFX0FUVFJJQlVURV9CVUZGRVJfU0laRSIsIlJHQkFfQVRUUklCVVRFX0JVRkZFUl9TSVpFIiwiQUxQSEFfQVRUUklCVVRFX0JVRkZFUl9TSVpFIiwiVEVYSURfQVRUUklCVVRFX0JVRkZFUl9TSVpFIiwiQVRUUklCVVRFX1RPX1NJWkVfTUFQIiwicG9zaXRpb24iLCJzaXplIiwiY29sb3IiLCJhbHBoYSIsInRleElEIiwiUEFSVElDTEVfU1RSSURFIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE9BQU8sTUFBTUEscUJBQXFCLEdBQUcsS0FBOUI7QUFDUCxPQUFPLE1BQU1DLGFBQWEsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQkMsTUFBdEM7QUFDUCxPQUFPLE1BQU1DLFNBQVMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQkQsTUFBdkM7QUFDUCxPQUFPLE1BQU1FLGVBQWUsR0FBRyxDQUF4QixDLENBRVA7O0FBQ0EsT0FBTyxNQUFNQyxrQkFBa0IsR0FBR0osYUFBYSxHQUFHRyxlQUEzQztBQUNQLE9BQU8sTUFBTUUsY0FBYyxHQUFHRixlQUF2QjtBQUNQLE9BQU8sTUFBTUcsY0FBYyxHQUFHSixTQUFTLEdBQUdDLGVBQW5DO0FBQ1AsT0FBTyxNQUFNSSxjQUFjLEdBQUcsQ0FDNUJILGtCQUQ0QixFQUU1QkMsY0FGNEIsRUFHNUJDLGNBSDRCLENBQXZCO0FBS1AsT0FBTyxNQUFNRSxrQkFBa0IsR0FBR0QsY0FBYyxDQUFDRSxNQUFmLENBQ2hDLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjRCxHQUFHLEdBQUdDLEdBRFksQ0FBM0IsQyxDQUlQOztBQUNBLE9BQU8sTUFBTUMsOEJBQThCLEdBQUdaLGFBQXZDO0FBQ1AsT0FBTyxNQUFNYSwwQkFBMEIsR0FBRyxDQUFuQztBQUNQLE9BQU8sTUFBTUMsMEJBQTBCLEdBQUdaLFNBQW5DO0FBQ1AsT0FBTyxNQUFNYSwyQkFBMkIsR0FBRyxDQUFwQztBQUNQLE9BQU8sTUFBTUMsMkJBQTJCLEdBQUcsQ0FBcEM7QUFFUCxPQUFPLE1BQU1DLHFCQUFxQixHQUFHO0FBQ25DQyxFQUFBQSxRQUFRLEVBQUVOLDhCQUR5QjtBQUVuQ08sRUFBQUEsSUFBSSxFQUFFTiwwQkFGNkI7QUFHbkM7QUFDQU8sRUFBQUEsS0FBSyxFQUFFTiwwQkFKNEI7QUFLbkNPLEVBQUFBLEtBQUssRUFBRU4sMkJBTDRCO0FBTW5DTyxFQUFBQSxLQUFLLEVBQUVOO0FBTjRCLENBQTlCO0FBU1AsT0FBTyxNQUFNTyxlQUFlLEdBQUcsQ0FDN0JYLDhCQUQ2QixFQUU3QkMsMEJBRjZCLEVBRzdCQywwQkFINkIsRUFJN0JDLDJCQUo2QixFQUs3QkMsMkJBTDZCLEVBTTdCUCxNQU42QixDQU10QixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBY0QsR0FBRyxHQUFHQyxHQU5FLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJpbWl0aXZlc1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1BBUlRJQ0xFUyA9IDEwMDAwO1xuZXhwb3J0IGNvbnN0IFZFQ1RPUl8zX1NJWkUgPSBbJ3gnLCAneScsICd6J10ubGVuZ3RoO1xuZXhwb3J0IGNvbnN0IFJHQkFfU0laRSA9IFsncicsICdnJywgJ2InLCAnYSddLmxlbmd0aDtcbmV4cG9ydCBjb25zdCBGTE9BVF9CWVRFX1NJWkUgPSA0O1xuXG4vLyBCeXRlIHNpemVzXG5leHBvcnQgY29uc3QgUE9TSVRJT05fQllURV9TSVpFID0gVkVDVE9SXzNfU0laRSAqIEZMT0FUX0JZVEVfU0laRTtcbmV4cG9ydCBjb25zdCBTSVpFX0JZVEVfU0laRSA9IEZMT0FUX0JZVEVfU0laRTtcbmV4cG9ydCBjb25zdCBSR0JBX0JZVEVfU0laRSA9IFJHQkFfU0laRSAqIEZMT0FUX0JZVEVfU0laRTtcbmV4cG9ydCBjb25zdCBBTExfQllURV9TSVpFUyA9IFtcbiAgUE9TSVRJT05fQllURV9TSVpFLFxuICBTSVpFX0JZVEVfU0laRSxcbiAgUkdCQV9CWVRFX1NJWkUsXG5dO1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX0JZVEVfU0laRSA9IEFMTF9CWVRFX1NJWkVTLnJlZHVjZShcbiAgKGN1ciwgYWNjKSA9PiBjdXIgKyBhY2Ncbik7XG5cbi8vIEF0dHJpYnV0ZXNcbmV4cG9ydCBjb25zdCBQT1NJVElPTl9BVFRSSUJVVEVfQlVGRkVSX1NJWkUgPSBWRUNUT1JfM19TSVpFO1xuZXhwb3J0IGNvbnN0IFNJWkVfQVRUUklCVVRFX0JVRkZFUl9TSVpFID0gMTtcbmV4cG9ydCBjb25zdCBSR0JBX0FUVFJJQlVURV9CVUZGRVJfU0laRSA9IFJHQkFfU0laRTtcbmV4cG9ydCBjb25zdCBBTFBIQV9BVFRSSUJVVEVfQlVGRkVSX1NJWkUgPSAxO1xuZXhwb3J0IGNvbnN0IFRFWElEX0FUVFJJQlVURV9CVUZGRVJfU0laRSA9IDI7XG5cbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfVE9fU0laRV9NQVAgPSB7XG4gIHBvc2l0aW9uOiBQT1NJVElPTl9BVFRSSUJVVEVfQlVGRkVSX1NJWkUsXG4gIHNpemU6IFNJWkVfQVRUUklCVVRFX0JVRkZFUl9TSVpFLFxuICAvLyBUSFJFRS5Db2xvciBkb2VzIG5vdCBjb250YWluIGFscGhhLCBzbyB3ZSB3aWxsIGhhdmUgc2VwYXJhdGUgYXR0cmlidXRlcyBmb3IgdGhlc2VcbiAgY29sb3I6IFJHQkFfQVRUUklCVVRFX0JVRkZFUl9TSVpFLFxuICBhbHBoYTogQUxQSEFfQVRUUklCVVRFX0JVRkZFUl9TSVpFLFxuICB0ZXhJRDogVEVYSURfQVRUUklCVVRFX0JVRkZFUl9TSVpFLFxufTtcblxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1NUUklERSA9IFtcbiAgUE9TSVRJT05fQVRUUklCVVRFX0JVRkZFUl9TSVpFLFxuICBTSVpFX0FUVFJJQlVURV9CVUZGRVJfU0laRSxcbiAgUkdCQV9BVFRSSUJVVEVfQlVGRkVSX1NJWkUsXG4gIEFMUEhBX0FUVFJJQlVURV9CVUZGRVJfU0laRSxcbiAgVEVYSURfQVRUUklCVVRFX0JVRkZFUl9TSVpFLFxuXS5yZWR1Y2UoKGN1ciwgYWNjKSA9PiBjdXIgKyBhY2MpO1xuIl19