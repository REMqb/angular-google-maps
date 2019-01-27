export type GoogleMap = google.maps.Map;

export type LatLng = google.maps.LatLng;

export type Marker = google.maps.Marker;

export type MarkerOptions = google.maps.MarkerOptions;

export type MarkerLabel = google.maps.MarkerLabel;

export type Circle = google.maps.Circle;

export type CircleOptions = google.maps.CircleOptions;

export type StrokePosition = google.maps.StrokePosition | 'CENTER' | 'INSIDE' | 'OUTSIDE';

export type Rectangle = google.maps.Rectangle;

export type RectangleOptions = google.maps.RectangleOptions;

export type LatLngBounds = google.maps.LatLngBounds;

export type LatLngBoundsLiteral = google.maps.LatLngBoundsLiteral;

export type LatLngLiteral = google.maps.LatLngLiteral;

export type MouseEvent = google.maps.MouseEvent;

export type MapOptions = google.maps.MapOptions;

export type MapTypeStyle = google.maps.MapTypeStyle;

/**
 *  If more than one key is specified in a single MapTypeStyler, all but one will be ignored.
 */
export type MapTypeStyler = google.maps.MapTypeStyler;

export type InfoWindow = google.maps.InfoWindow;

export type MVCObject = google.maps.MVCObject;

export type MapsEventListener = google.maps.MapsEventListener;

export type Size = google.maps.Size;

export type InfoWindowOptions = google.maps.InfoWindowOptions;

export type Point = google.maps.Point;

export type GoogleSymbol = google.maps.Symbol;

export type IconSequence = google.maps.IconSequence;

export type PolylineOptions = google.maps.PolylineOptions;

export type Polyline = google.maps.Polyline;

/**
 * PolyMouseEvent gets emitted when the user triggers mouse events on a polyline.
 */
export type PolyMouseEvent = google.maps.PolyMouseEvent;

export type PolygonOptions = google.maps.PolygonOptions;

export type Polygon = google.maps.Polygon;

export type KmlLayer = google.maps.KmlLayer;

/**
 * See: https://developers.google.com/maps/documentation/javascript/reference?hl=de#KmlLayerStatus
 */
export type KmlLayerStatus = google.maps.KmlLayerStatus;

/**
 * See: https://developers.google.com/maps/documentation/javascript/reference?hl=de#KmlLayerMetadata
 */
export type KmlLayerMetadata = google.maps.KmlLayerMetadata;

export type KmlAuthor = google.maps.KmlAuthor;

export type KmlLayerOptions = google.maps.KmlLayerOptions;

export type KmlFeatureData = google.maps.KmlFeatureData;

export type KmlMouseEvent = google.maps.KmlMouseEvent;

export type Data = google.maps.Data;

export type Feature = google.maps.Data.Feature;

export type DataOptions = google.maps.Data.DataOptions;

export type DataMouseEvent = google.maps.Data.MouseEvent;

export type GeoJsonOptions = google.maps.Data.GeoJsonOptions;

export type Geometry = google.maps.Data.Geometry;

/**
 * Identifiers used to specify the placement of controls on the map. Controls are
 * positioned relative to other controls in the same layout position. Controls that
 * are added first are positioned closer to the edge of the map.
 */
export type ControlPosition = google.maps.ControlPosition;

/*
export enum MapTypeId {
  /** This map type displays a transparent layer of major streets on satellite images. */
  /*HYBRID,
  /** This map type displays a normal street map. */
  /*ROADMAP,
  /** This map type displays satellite images. */
  /*SATELLITE,
  /** This map type displays maps with physical features such as terrain and vegetation. */
  /*TERRAIN
}*/
export type MapTypeId = google.maps.MapTypeId | 'hybrid' | 'roadmap' | 'satellite' | 'terrain';

/***** Controls *****/
/** Options for the rendering of the map type control. */

export type MapTypeControlOptions = google.maps.MapTypeControlOptions;

export type MapTypeControlStyle = google.maps.MapTypeControlStyle;

export type OverviewMapControlOptions = google.maps.OverviewMapControlOptions;

/** Options for the rendering of the pan control. */
export type PanControlOptions = google.maps.PanControlOptions;

/** Options for the rendering of the rotate control. */
export type RotateControlOptions = google.maps.RotateControlOptions;

/** Options for the rendering of the scale control. */
export type ScaleControlOptions = google.maps.ScaleControlOptions;

export type ScaleControlStyle = google.maps.ScaleControlStyle;

/** Options for the rendering of the Street View pegman control on the map. */
export type StreetViewControlOptions = google.maps.StreetViewControlOptions;

/** Options for the rendering of the zoom control. */
export type ZoomControlOptions = google.maps.ZoomControlOptions;

export type ZoomControlStyle = google.maps.ZoomControlStyle;

/** Options for the rendering of the fullscreen control. */
export type FullscreenControlOptions = google.maps.FullscreenControlOptions;
