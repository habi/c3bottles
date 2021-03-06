{% macro init_map() -%}
const opts = {
    'lat_lng': [{{ config.get("OSM_MAP_LAT", 53.56164) }}, {{ config.get("OSM_MAP_LNG", 9.98550) }}],
    'default_zoom': {{ config.get("OSM_MAP_DEFAULT_ZOOM", 17) }},
    'enable': {{ config.get("USE_OSM_MAP", False)|string|lower }}
};
init_map(opts);
{%- endmacro %}
