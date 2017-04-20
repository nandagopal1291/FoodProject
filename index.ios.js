/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View,
  Image,
  Icon,
  TouchableOpacity,
  ListView

} from 'react-native';

import ImageSlider from 'react-native-image-slider';
import { MediaQuery } from "react-native-responsive";
var base64Icon = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVCNjg3NjMyMDAwNTExRTc5RDc2RTJFNjM4RDEwODVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVCNjg3NjMzMDAwNTExRTc5RDc2RTJFNjM4RDEwODVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUI2ODc2MzAwMDA1MTFFNzlENzZFMkU2MzhEMTA4NUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUI2ODc2MzEwMDA1MTFFNzlENzZFMkU2MzhEMTA4NUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwIC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';
var homeIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REE0MzJGN0RFNzk0MTFFNkI1RTU5M0ZFQzU0ODIzMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REE0MzJGN0VFNzk0MTFFNkI1RTU5M0ZFQzU0ODIzMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQTQzMkY3QkU3OTQxMUU2QjVFNTkzRkVDNTQ4MjMyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQTQzMkY3Q0U3OTQxMUU2QjVFNTkzRkVDNTQ4MjMyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjxFSqkAAAMJSURBVHja7Jg9aBRBFMc3JoIfIByJhcGIHIhokBSm8asTm5TrWVjYhiBY+JWAnUgwRm0U0SuSQrGJpxCtvAuIaETkKj+CghEkEjCQI4KC5JLz9/QtDJs9Pc3F7O7Ngz9v5u3M23n/NzsfW1cqlZxalhVOjYslwBJQ49KwnC/PZDIdqDvgkOu692tqBhD8XtQD8BgMa/2/S91ybIMEuxv1FJwk85eon6B8EeyhPkp9H+XDYB7cwvYsNgQQ3C7UKOgmsAuG/TSqD2wSYkAXmAZPaHcwFp8AQW7R4HvN4EW03gs+ggnQBK6DVbFYAwg+iXoHrhDsmaA2ak+Ds5S/oNfHggCC34x6LxklsGO/a8vzTtQAfSbRr3QWRJcAApGp/AHcJriuSvrQ7qguklfBvcjuAgS/FvUZPCKojn/oP4ySHWEj/b9GigAGvwb1Fowx+AOL8PMQtQ1sxc+3SBDAoOXTegNmGfSOKvh7iVoJtuNvPgprwIhkDAxWyd+g+hsJ/SJItsZQU+AmaKuS2zb1N6X+Q30ZGmCa9jPQa5Q3BBAk7+wGrTqtPZkFr+U0SP+ir9s6MIn9CP1PhXoGSPBalOCLAU0awTk96ZnSpPbGgD5Fj0zDf+ivw8Uy9tXgU9DOQHYn9Pnf+IvcdXhO3kuwLb7gW3Q8c/aPkCXAEmAJsATEgIB6Pdz4Zcb59a9vpkK7d0iqX4pBNiwxAc3+7U6utnroadV9/092keYyxISagBfgOHjuv4GC7+AuKFVgF5HfYpcj90PELoKWAEuAJcASUEsEsH/vBNPl6mGUap8DEooFdSEDdR7sBznQ47puXgkaB/K8T7W0kV9jPdo3hbqh7TqlXxQ/AfkPWGDwcuApaN0jaQi0qy3nlZU0R4MXMvJGv/ASwMBLAopZwyxZTGs5rXVP8kZWzXICPzIbEtjSSlQq9EdhzbKjg89Wi1QtFqK6C+SM7KU0m5XIuOp2xVCYCSj4MmTW5RtOaiaTuuD52ywoM5t+Lnw6k7LGZ2QvQ/YgZAmwBFgCFis/BBgAXgcorDCJLIYAAAAASUVORK5CYII='
var homeselectedIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZEMDUwRjZFNzk0MTFFNkFDNkY4RjVCRUY1OTkzMTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZEMDUwRjdFNzk0MTFFNkFDNkY4RjVCRUY1OTkzMTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRkQwNTBGNEU3OTQxMUU2QUM2RjhGNUJFRjU5OTMxMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRkQwNTBGNUU3OTQxMUU2QUM2RjhGNUJFRjU5OTMxMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsxBrSoAAAKoSURBVHja7JlPSFRBHMfftgqVUARCf3BBhIgST3pR8rZ1EQ8d9ppHbx0UrXOHUAMhoT/bIenQySiITu1K0SGI8iQmHuogRtahZQ9lpdvzO/RdHIa3rkszu87u7wcf3sxv583O+87M+83Mi4VhGDSyHQga3EQAEUAEqKkNgA0w2IgCnAfPwWvwjPnqmwqDNaAv/GejzI8y38d8P7gLboNel22pxcP38mHHDf84/QlwC/wB6+Cxy/ZUewqcBm/ADTBl/DZF/ypYA63gHjhYL1Oggz08U6ZcGmwwraZA1mW7mqrU8+3gI3v0Spmyw2ALfAHXwUvfR0Are/5RhfepuV8AcZftizneDLWAb+AVY36lpsJjP2gDP1w00KUAh8EKWAYX/6OeF+AsOAN++iKAii4fwCboslDfImgG58BfH1aC8+yxWUv1zbK+eR9GwDJ77Jd6x4IhC3U+VG3lmqCLU8KKuQiDD8BNcAecLPGfV0Enh3XR1HRZApMMg7odYVi8DMZ8eQk+5YOkDP9xsA4yIK/5j4IL4AT4atwzR+Eu2W6ky4XQVgn/IfC5RGRY4++V1OfddrjA/00Y/gT9BTkREgFEABFABKgDAeJc3JiW53o+v0d/cZEUd9HIJscCnIoId2087upk3C/nD1hP3jcB3oER8NZcfYLf4An3CuX8AfcA076dB8hLUAQQAUQAEaDRBOgG33fJ170Ax0hUXomRYYzPMB9QoPf0T2hlJrR6Ulq5bl+ngDoHzHHBk2O+KJI68uqhL6uliw+bBtfAgnafHbP8qSkZRlvAa9IoZ/qj0npZPb2vP47GeE1ySFvpK15zvk6BbLBzQpzisN+LfeK1h8ztZwFyRg/peTWHO9iT6joZUSYqrQQY5khS3JfNkCyERAARQASwZNsCDADhk2zuauIJygAAAABJRU5ErkJggg=='
var menuIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjY4RTA5QTRFNzk0MTFFNjhDRjFDQUIwQzJCODIwQkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjY4RTA5QTVFNzk0MTFFNjhDRjFDQUIwQzJCODIwQkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNjhFMDlBMkU3OTQxMUU2OENGMUNBQjBDMkI4MjBCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNjhFMDlBM0U3OTQxMUU2OENGMUNBQjBDMkI4MjBCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiLp9E4AAAQuSURBVHja7FpZbExRGL6jSEMsbaWWILELHsiIeLEkiHjwoqklhCDaiKUvkpZIpPY1hHjQiESVoEpIPFQrtgTRWhIRImm1tLaHFkWpZXx/+k1yc5x7Z6ammTPm/smXc+Ys997znf//z//fO75AIGAlsnSwElw8AjwCElw6RuMiJSUlUswDdgOpYU77CqwDTgDLge1AlzDnvgdyMzIyzv3rs/uicQqAgLEoKoBmoCHMaV2pgUeAVUAL8CXMuT2BZGAiSHgUcw2AnAXuApMinHcMWA8cxUJWREj6HRRFwBgTfMAwIF/Tng5sBmY7zNvDclcb7rkFGG2ED3AgUx7uPpDE+wgRm5Qxv1l2bsP9fhjjBB2udQGoBkYBc0RrgQfARduYTiy/Q6V9YgpAL821r8NE9mPMSfExqK+JlvZGkwC7TKBZBO3zPHAP2KgQEJRf4pA5J03T/5TlCKCO9YDJBCzh7j+xtR2g0+sLvFG9Ona1BuVkt4tizHiN9hhJwDjgldJWyaNroIaAz/Ts4khTNNerxOIL0b8D9U+oS/nTZAJ6A4+VNrf44AcW14HBVLqmX5xkIbAIeAnssDlQIwm4BsxS2ubR1mt0gQ12tRblyBAmMEAhxVgCtgELuWuLeRIcBg4B7zTjm2kCS1F01/Q/w+JL0Z8lITTqRSTTWAJe0KGJ578K5ACXgLUO47/RBIS4Ppp+WXApA6da/jaaAIu5gez2FHr+fLfYHrsqtt0vhAn0iBcTUD28qHg3lzEtNIGpTJJUqZekB/3TxGGiftN0J2iXYMDic0uNaQIlDun0aWABcJlOdKTpx2CkIo4vgJ1NC2ECyfESCOk0wE1+Y3EBaMFgBkuqfER/PfqHkqgq00Nhu6NqCeNeTTSBSodI8Awwn6G1nALD48UE5LXXEDq2ry7junFH/Q6+oomlxBPfo/ns0SRA55WPAxt4CtxymZskJsD4wc0HVIW4X0wJaNa07QXk7L4NvP5HP6FLoY0hoN5qfbF5Q2lvBFa7zPuglJHISt7XCAKWMVR96BDr66SOYbLY9yQGOf0jyDblTfRMUwi4wrdAWx1ieZ0Mslq/B8gpcQp47mBGOnkr94NPqDDJB1S0YUfkm4BkeAexmJxYRGCx/jS2hyawL1YP4PP+H5Dg4hHgERBlwXneAGQqbZnSbiIB7ZEMSTaXCxTb2nKDWR6I8PP4k9Q3G8dfMdvKGDnKuDy0F5C0GajfD45BPTUeTMCPB57OBU9nlmcnQz6a5pGIIGmCbKv1S/FOpV2tG0+AfBYLmkEmf1u238Wyw7KgIFHM9spJTkrc+gCK7GIWF5dl/f39vwx9AVvC9N+dAtX0AUdYVit9ov6pmj5Lk036bZoTFwQ0EgV0dAW2NpG51ApxcOVQ+0al314XonKpLSntoS1eKOwFQh4BHgEJLX8EGACA0Ea0ljjbYAAAAABJRU5ErkJggg=='
var menuselectedIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkzMzQzNTVFNzk0MTFFNkFCNzg4MzZBNTc2NTA1RDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkzMzQzNTZFNzk0MTFFNkFCNzg4MzZBNTc2NTA1RDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTMzNDM1M0U3OTQxMUU2QUI3ODgzNkE1NzY1MDVEMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTMzNDM1NEU3OTQxMUU2QUI3ODgzNkE1NzY1MDVEMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg+jnOQAAAPVSURBVHja7JpbSFRBGMd31cQILTOMIn0oKzMfis3qpQu0EQm9RNuFLlLBvkTPG1GEUoQQVEQPWghJQRcqfOghMoqEgjSLLhTCWplZvbiYpbTlbv/B/8I0zO4ed8+yZ9vzwY/xzO3M/s/MN9+cozMcDjuy2XIcWW62ALYAtgCm2TbwEQwb5BvYzbb7eW20rR9sMWPQTpN2gSWgE4yCQYNtpvABNIEDIAh+Gmw7DRSAleBFUiMXAphAD+hIoF1LeNwuJND2CXid7NjNEkCYW5NfChrApijtFrFtRQL3rGXbpMael0J/shg8A7lA3KcBHFPqhJjmJ3C/32YM2kwB1L5ug15QBTaDm6AbtEl1JjH9JfwRuAhmaPp+CE6DK/QxB81y4Hkp2l2Wg/mgmte3wFNwRBEgYmMUQLQp0ZS/ZboQ9Efcl5UFqOPTfyPlnQEtYBb4ovHqH8DqOP0u08weSwqwFHxS8rq4dZVrBPjBtB4Ua/oTbVvBSfCd6R8rCzATvFLyBuM4tBwGU6Wa8nwKsAv0UYCQlQV4ADZqIsUxTnVdYCOiyMo4/ZYpolhWgBNgJ5/aHu4E58E5hryqjTLdC4o05e/AXeAFI+AyxUzeTAyEapW8GubXgW7QpmlXzTrlIAcMgJCGVtYfAi/593qrBUKqdfJpr6Hnr48T24u1PTtOn1MzZQmoHl5M8cIYdYJM1/KQpNpnHnrW0WE+sroT/GeVRU6eMeqMcBcQ0eJ0TflVsAPcoROttPo2OFErolAlceoVZEogpJsBsSzEenOVHxmxIS6DCtbzWz0Ulh1V0MC9hrkEuqJEgtfAdobWIl5YkClLQKzteXRsIzHqFfKJuqL4imGmVTw5mjZ2MwXQeeVL4DB3gY4YbXMpwPs49/DHuV9aBRjV5J3i3v0YDCTpJ3RHaMu8FO3nj9w6wXZzeGosk875Rk1smSvYR9pnwD7G6s+jxPrRRLvP9b2KQY7RHyNOm+JN9AarzABhNeA4B2fEJtObB7lb9ERZRjr7Co4y3LbEYShRmnigOZuuMTjT/HlcBDbdfHfYl44BOO3/D8hyswWwBTDfxNtfj5LncRj/apzxAojTnE/J80mnPBdPfbJQLl77mXolMV1KHZMP6+bvrWHla7FbyhPX17n/e8GgUkekPilf14+p402VD+iVnq6H1/JyuAGaOSvcUlm7Y/yLcnGmO8FGTmM300al/J50Agz8j7tAL59yE9NepeyQY/zlp1qmWkDyAZ5MESBAmvmOr1nKc/DI7KVDa5fKAkp7B4XycbYUp2K22KGwHQjZAtgCZLX9FWAAa93GE3cbDtgAAAAASUVORK5CYII='
var orderIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlGOUE1RTNFNzk0MTFFNkI1RDY4ODAwOUY1Q0M5RkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlGOUE1RTRFNzk0MTFFNkI1RDY4ODAwOUY1Q0M5RkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OUY5QTVFMUU3OTQxMUU2QjVENjg4MDA5RjVDQzlGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0OUY5QTVFMkU3OTQxMUU2QjVENjg4MDA5RjVDQzlGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmgpSG8AAANSSURBVHja7JlNaBNBGIa3KmgFxUaKFfRU7c2DpFRRsSopelMbo55EUavEg+APEcW/Kpi24lFJRFERDy3xoKhIS9Ei/tFU8G4Ee5CgJuqhh4qu7wfvwrqkRrJxZ9LsBw+TzM7PzrvffDM7W2OaplHNNsWocvMF8AWocptWSqVUKuWmzwD4UiB/HNSD78UaCIfDagVwaTkwHfwC15i3G9SAHxXhAS5tIZgN5oJ7zFtBYb6B0ckowDzQAdaApaBugnJ58AY8AUmQrXQB5oNLIAKmcoB3wQh4C76y3BywBCxj2XXgNOgDh8DHShRgD7jCPiRqXgaDfyn/jOV3UoAo2C4xD+wH1ytlGazlU74Khji/txQZvNMGWUfqvmawvEkv0lqAmeAB2Aw6QQi8cNGe1F0LzoEd4BGYobMAd3jDuziHy/GmJUvjKXAAtIEbugpwHmwEx8t9kzSJIWfANmzETuomQAs4wbl/4T8G1rPsoxMitOgigOzgurmVjXqwp4hyWnTrIsBq0Mr1OuuBAFn21QovWKWDAAfBZwZAr+w2+AQOqxZgFpe8Ae7yPDG8DcoO8inYBC+oVSnABqb3FbxUPWQaUinASga/EQUCPGffbSoFaAJj4IMCAUbZ9yKVAjTwJsa8Hj3igNVvg6s1vJTvAgg8y5EcBe3MemyosfVMZXPUA1FeevU6fAsspuv/dDsPXdh7viG28zyhySsBZPAX6QWGAvd3emQPkiNex4BxQx8r+V7cnAjJEfYCFaMtcCxf77UAr8BeoosNebYKTCbzvw36AvgC+AJUtZXlyxDW5TiSGP92Yad27B/WcZNb6AG3O0GlHsDBy6FEgISYJ9dyYFjSIs3I90ApMwyCzLP+W3XjFO0d2gvqNAU6+NTzgvxmnph8BU4jP0BBEsC0DcqyBBCvSds8qY7/AxQlxt9dtjJaCCA3aj8PzBt/fv7u4+CDFKYRNNuuh1g+ybIRZ122KfRKWQi6VScBnAN2CmLPl/mbQZIpcF08o3+CuhkKJ/EiItNKpyAoTymGm7KCWYxPs9AgjALz1xKj2TalnBakOI0sn9DJA6y5myNpzlO761pPfh8DW6/tmpXfT5LOumwzyfbj5TyA8V+G/J2gL4AvQFXbbwEGAISC9R/Xb6OSAAAAAElFTkSuQmCC'
var orderselectedIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUJENTIzMzNFNzk0MTFFNkJGRjVCQzJEMUFCOTREQkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUJENTIzMzRFNzk0MTFFNkJGRjVCQzJEMUFCOTREQkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QkQ1MjMzMUU3OTQxMUU2QkZGNUJDMkQxQUI5NERCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QkQ1MjMzMkU3OTQxMUU2QkZGNUJDMkQxQUI5NERCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJKfLQAAAL2SURBVHja7JpNaBQxGIazVsUWFKdSWsUfaNWbB5lSLf5SVvCoh7mLyh48ClI8iCgeFhZ634IHb1LdIggi1n+09CAKHpUK2oMswqqXglt0fEPfwVBmpGUzScrmg4fZmfmSfHk7mfmStBDHsWhnWyPa3LwAXgAvgHHrBnEKv8Am08EULH0F1oM/4CbPz8lYwEI7CLCDf+ktoIfXvoEG+AnmTAaz1lA7vaAEjoP9IMjw+w7egedgHNRX+xOwFYyBCHSwg5PgLXgPftBvM9gHDtC3C/wGd8BF8DW3CKUAOXEeLMSLdheMrKDsCMtIa4KzecWZR6WdYJLBPwHDLdQly75iXbdAh+sCdIGnDPgaKGiocx24zjofgQ0uC3CPgZ7J4cm6wLpvuyrADQZ4Ocf3ylW2ccU1AYYYWC3HzifU2NaQjvp0fAZlBvcMDIOdBr7dvUyWpplXWJ8LHAXH+L2uG0iq6mxLtnnYhURIJjZHwF4mOiZMJk4fwGtw2uYTsJEBPDbYecEM8gU4BTptCnCSx/sWZpQPeCzaFOAQaDK3N23TbPuETQHkuJ8HXywIMMe2d9sUoI9BzFsQIGm3z8Z6wEFwiXN7aQ8tLeltIzVQATOmPoPyE7SHj76ct++yJMBnrjPIBOwjh6SR9QBpFQNp73KpMKYVl23lHdB0aHW7afodILigud0RAXpMp8IzXL9zyV5yfrAq9gWcMb815gXwAngBvAAarCz+bXOXl5uEtjqXd0WAMjvSTYqKCHLH9w2P/7NI8Q0zyiYizyo+rZuGPLwBIuU84rVkzlBV7lV5rcFjUamjxPsTKWVDngf0m3BpX0DtiODvOOVe0ol+ktxT/bPK9lOkKTCqcyKlYwjIxVB1vz8Q6Qukic8nkvZOmMooK/0HxOLia8ShocV0/IOE3MMfZXCCv8czOiFSxm9yfZDHUkrZkOIM0L/q0jsgUMZ2Mm4DZWyHim+JPrNL7pV4rl5bWraslA11DQE/GfKJkBfAC9DW9leAAQCZ6UbiN2t3BQAAAABJRU5ErkJggg=='
var notifiIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Nzc2OUM4NzVFNzk0MTFFNjkwRDZENkE2MzU5NDBDMzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Nzc2OUM4NzZFNzk0MTFFNjkwRDZENkE2MzU5NDBDMzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzY5Qzg3M0U3OTQxMUU2OTBENkQ2QTYzNTk0MEMzMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzY5Qzg3NEU3OTQxMUU2OTBENkQ2QTYzNTk0MEMzMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrWyLmYAAAO9SURBVHja7FlNaBNBFN5qi4o/NbUHDxa1HkRRsKQKikrR/lwUhJrc/D0kN0E82KMgaHoRwVOrJ71VIqIeBKMHQUVpFNFaSklR8FBQEmz9Rxu/R76Rcc2m2eaP/Rn4mN3ZN2/f++bN25nZumw2a3i5zDM8XnwCfAI8Xupr+fJ4PB5GdQmQTHyit7d3qNo21NXqKwDnG1F9BPYB84EbQDNI+OyVKbCZEfgCeAksALa4PgIw8uL0AHAAGAVaOQUmgPXAHSCCSPjlughg2L8GOoEQnNyJuhvowfUuaQM6RIay7ooAOPUAVQDOts0iJ9PiA+S6XRMBcKoLlYz47iLERaYDffa6aQocl/mNUZ2eTZAykgsOu4mADcBDG/KPgU1uImAJ8MOG/Feg0U0EzEjStZOggd+uIADJbCFXe5M2uk1q6wbHR0AL3zVuo884SVvtBgK28V0jNvrIgmkRsN0NBBwDnuDzNlNsB8o+Ao46mgDMYRl9WdCcnUP3M9IXOrY6kgAYLhudp8AFjOiI3f7o8wbVReAZdK11FAEweA+qFHAZjpyaqx70PYnqquwWobPDSRGQAM7BgUipiqDjCKrz1OkYApJy6IFRaytDNLXxsOR5uY2s5CJDdn9XgFtw4AunwxgXOFPAK2A50ED5n8AnI3dStAxYyQOSdcBi5pKyb48rfh4A58WJ/cAaYBXQDMjKMEiHpygqZCxl5Hw3cueF74G3wG1MgzHHH4hopGzkzrAFjn1jm4z6O2AH2karZUutDkVlk7OCkaBKA6NgppqG1PJYPM4FUg+b7gL3MfoHPUEASbhm5E6HpdyE84eqbUOd/3vc48UnwOsE1JuSUqn6IlzIJG0+K4d+2TOUHAFpI/d7Sr8PFugvv7j0LBrU5If57HSeZ8WWQvorMgUCRu7HZUC7V9chEqKTpP7nZ2lYiKMzlMfQkDZyEerJ8lpvK0Z/XnsQwUEgDaRYR9ge4f3ftkI5IAPELIjpIxRJYfU5pWEBU7tsiPpNZAaoX/S087qVdZjy6v1W+q3sUYia9MTY1qVFpOVuUCm8bgo9UTzI+4ESQtGsq8lUGyTEjo5/7EEuSDCfqeidoOMJkj5rBCgSqllUzrhXbsUgpJ0DKsSmeFRX8DM4SNb0w40Mk1Inr5OmKWLnoCTDOR/kHFbXTSTfyDMFDRv2mJfcaT6PmvLaf1MgQxgUHtbaolpSirItQcVphpbeX7/W71WExWhIPwlvpZ6k1s9Kv5U9Vu/v02UREUl/L+CvBH0CfAJ8AlD+CDAAz/RayQSCOKEAAAAASUVORK5CYII='
var notifiselectedIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUJENTIzMzNFNzk0MTFFNkJGRjVCQzJEMUFCOTREQkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUJENTIzMzRFNzk0MTFFNkJGRjVCQzJEMUFCOTREQkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QkQ1MjMzMUU3OTQxMUU2QkZGNUJDMkQxQUI5NERCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QkQ1MjMzMkU3OTQxMUU2QkZGNUJDMkQxQUI5NERCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJKfLQAAAL2SURBVHja7JpNaBQxGIazVsUWFKdSWsUfaNWbB5lSLf5SVvCoh7mLyh48ClI8iCgeFhZ634IHb1LdIggi1n+09CAKHpUK2oMswqqXglt0fEPfwVBmpGUzScrmg4fZmfmSfHk7mfmStBDHsWhnWyPa3LwAXgAvgHHrBnEKv8Am08EULH0F1oM/4CbPz8lYwEI7CLCDf+ktoIfXvoEG+AnmTAaz1lA7vaAEjoP9IMjw+w7egedgHNRX+xOwFYyBCHSwg5PgLXgPftBvM9gHDtC3C/wGd8BF8DW3CKUAOXEeLMSLdheMrKDsCMtIa4KzecWZR6WdYJLBPwHDLdQly75iXbdAh+sCdIGnDPgaKGiocx24zjofgQ0uC3CPgZ7J4cm6wLpvuyrADQZ4Ocf3ylW2ccU1AYYYWC3HzifU2NaQjvp0fAZlBvcMDIOdBr7dvUyWpplXWJ8LHAXH+L2uG0iq6mxLtnnYhURIJjZHwF4mOiZMJk4fwGtw2uYTsJEBPDbYecEM8gU4BTptCnCSx/sWZpQPeCzaFOAQaDK3N23TbPuETQHkuJ8HXywIMMe2d9sUoI9BzFsQIGm3z8Z6wEFwiXN7aQ8tLeltIzVQATOmPoPyE7SHj76ct++yJMBnrjPIBOwjh6SR9QBpFQNp73KpMKYVl23lHdB0aHW7afodILigud0RAXpMp8IzXL9zyV5yfrAq9gWcMb815gXwAngBvAAarCz+bXOXl5uEtjqXd0WAMjvSTYqKCHLH9w2P/7NI8Q0zyiYizyo+rZuGPLwBIuU84rVkzlBV7lV5rcFjUamjxPsTKWVDngf0m3BpX0DtiODvOOVe0ol+ktxT/bPK9lOkKTCqcyKlYwjIxVB1vz8Q6Qukic8nkvZOmMooK/0HxOLia8ShocV0/IOE3MMfZXCCv8czOiFSxm9yfZDHUkrZkOIM0L/q0jsgUMZ2Mm4DZWyHim+JPrNL7pV4rl5bWraslA11DQE/GfKJkBfAC9DW9leAAQCZ6UbiN2t3BQAAAABJRU5ErkJggg=='
var ROW = 3;

export default class FoodProject extends Component {
  static title = '<TabBarIOS>';
 static description = 'Tab-based navigation.';
 static displayName = 'TabBarExample';

 state = {
   selectedTab: 'redTab',
   notifCount: 0,
   presses: 0,
 };
 /*constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var data = Array.apply(null, {length: 10}).map(Number.call, Number);
    this.state = {
      //dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
      dataSource: ds.cloneWithRows(data),
    };
  }
*/
  constructor(props) {
          super(props);

          this.state = {
              position: 1,
              interval: null
          };
      }

      componentWillMount() {
          this.setState({interval: setInterval(() => {
              this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
          }, 2000)});
      }
 _renderContent = (color: string, pageText: string, num?: number) => {
   return (
     <View style={[styles.tabContent, {backgroundColor: color}]}>
       <Text style={styles.tabText}>{pageText}</Text>
       <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
     </View>
   );
 };
 _renderHomeContent =(color: string, pageText: string, num?: number) => {
   return (
     <Image source={require('./Assets/landing-page.png')}
     style={styles.backgroundImage}>
     {this.props.children}
     <Text style={styles.text1}>Food</Text>
     <Text style={styles.text2}>Panda</Text>
     <Text style={styles.text3}>WHAT A TWIST.</Text>
     <Text style={styles.text4}>The Panda, the iconic long, slim sliok of bread, has</Text>
     <Text style={styles.text41}>traditionally one of the most potebnt symbol of french</Text>
     <Text style={styles.text41}>culture.</Text>
     </Image>
   );
 };
 _renderNotifiContent =(color: string, pageText: string, num?: number) => {
   return (
     <View style={[styles.tabContent, {backgroundColor:'#00b8d4'}]}>

           <View style={[styles.menuBar, {backgroundColor:'#00b8d4'}]}>

          </View>
       <Text style={styles.tabText}>notify</Text>
       <Text style={styles.tabText}>coming soon</Text>
     </View>
   );
 };
 _renderOrderContent =(color: string, pageText: string, num?: number) => {
   return (
     <View style={[styles.tabContent, {backgroundColor:'#00b8d4'}]}>




       <Text style={styles.tabText}>order</Text>
       <Text style={styles.tabText}>coming soon</Text>
     </View>
   );
 };
 _renderMenuContent =(color: string, pageText: string, num?: number) => {
   return (
     <View style={{flexDirection: 'column',margin: 1,flex:1}}>
     <View style={{height:20,backgroundColor: '#e65100',width:null}}></View>
     <View style={{backgroundColor: '#ef6c00',flexDirection: 'row', marginTop:0, height: 30, width:null}} >
     <View style={{flex:0.5,justifyContent:'center'}}>
     <Text style={styles.text5}>We are happy to serve you!</Text>
     </View>
     <View style={{flex:0.4,justifyContent:'center'}}>
     <Text style={styles.text6}>Menu</Text>
     </View>
     <View style={{flex:0.1,justifyContent:'center'}}>
     <TouchableOpacity onPress={this._onPressQRCode} >
 <View>
 <Image source={require('./Assets/Cart.png')} style={{ height:17, width:17}}></Image>
 </View>
</TouchableOpacity>
</View>
<View style={{flex:0.1,justifyContent:'center'}}>
<TouchableOpacity onPress={this._onPressQRCode} style={{}}>
<View>
<Image source={require('./Assets/Search.png')} style={{ height:15, width:15}}></Image>
</View>
</TouchableOpacity>
     </View>
     </View>
     <View>
     <ImageSlider  images={[
       'https://preview.ibb.co/ezHn5k/Head_Image.png',
              'https://preview.ibb.co/ezHn5k/Head_Image.png',
              'https://preview.ibb.co/ezHn5k/Head_Image.png'

     ]} position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
     </View>
     <View style={{flexDirection:'column',flex: 0.2,flexWrap:'wrap',margin:1,marginTop:18}}>
     <View style={{flexDirection:'row', flex: 0.2,flexWrap:'wrap'}}>

        <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
        <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
        <View style={{flex:0.3}}>
        <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu1.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
</View>
<View style={{flex:0.1,padding:3}}>

          <Text style={styles.flexmenutext1}>Cafe 5H by The Kitchen</Text>
</View>
          <View style={{flex:0.1}}>

          <Text style={styles.flexmenutext2}>Lowerance Road. Casual Dining.</Text>
</View>
<View style={{flex:0.1}}>
<View style={{flexDirection:'row'}}>
<View style={{flex:1}}>
<Text style={styles.flexmenutext3}>  Open now</Text>
</View>
<View style={{flex:1}} >
<Text style={styles.flexmenutext31}>3.9 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image>  </Text>
</View>
</View>
</View>
          </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
          <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
          <View style={{flex:0.3}}>
          <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu2.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
  </View>
  <View style={{flex:0.1}}>

            <Text style={styles.flexmenutext1}>Truffles Ice & Spice</Text>
  </View>
            <View style={{flex:0.1}}>

            <Text style={styles.flexmenutext2}>American, Cafe</Text>
  </View>
  <View style={{flex:0.1}}>
  <View style={{flexDirection:'row'}}>
  <View style={{flex:1}}>
  <Text style={styles.flexmenutext3}>  Open now</Text>
  </View>
  <View style={{flex:1}} >
  <Text style={styles.flexmenutext31}>4.2 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image>  </Text>
  </View>
  </View>
  </View>
          </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
            <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
            <View style={{flex:0.3}}>
            <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu3.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
    </View>
    <View style={{flex:0.1}}>

              <Text style={styles.flexmenutext1}>Beijing Bites</Text>
    </View>
              <View style={{flex:0.1}}>

              <Text style={styles.flexmenutext2}>Lowerance Road. Casual Dining</Text>
    </View>
    <View style={{flex:0.1}}>
    <View style={{flexDirection:'row'}}>
    <View style={{flex:1}}>
    <Text style={styles.flexmenutext3}>  Open now</Text>
    </View>
    <View style={{flex:1}} >
    <Text style={styles.flexmenutext31}>4.1 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
    </View>
    </View>
    </View>
          </View>
              </View>


      </View>
      <View style={{flexDirection:'row', flex: 0.2}}>

      <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
      <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
      <View style={{flex:0.3}}>
      <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu4.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
</View>
<View style={{flex:0.1}}>

        <Text style={styles.flexmenutext1}>Londoness</Text>
</View>
        <View style={{flex:0.1}}>

        <Text style={styles.flexmenutext2}>Lowerance Road. Casual Dining</Text>
</View>
<View style={{flex:0.1}}>
<View style={{flexDirection:'row'}}>
<View style={{flex:1}}>
<Text style={styles.flexmenutext3}>  Open now</Text>
</View>
<View style={{flex:1}} >
<Text style={styles.flexmenutext31}>4.5 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
</View>
</View>
</View>
        </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
        <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
        <View style={{flex:0.3}}>
        <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu5.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
  </View>
  <View style={{flex:0.1}}>

          <Text style={styles.flexmenutext1}>Big Wong</Text>
  </View>
          <View style={{flex:0.1}}>

          <Text style={styles.flexmenutext2}>Chinese, Thai</Text>
  </View>
  <View style={{flex:0.1}}>
  <View style={{flexDirection:'row'}}>
  <View style={{flex:1}}>
  <Text style={styles.flexmenutext3}>  Open now</Text>
  </View>
  <View style={{flex:1}} >
  <Text style={styles.flexmenutext31}>3.7 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
  </View>
  </View>
  </View>
        </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
          <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
          <View style={{flex:0.3}}>
          <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu6.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
  </View>
  <View style={{flex:0.1}}>

            <Text style={styles.flexmenutext1}>Tamura</Text>
  </View>
            <View style={{flex:0.1}}>

            <Text style={styles.flexmenutext2}>Japanese</Text>
  </View>
  <View style={{flex:0.1}}>
  <View style={{flexDirection:'row'}}>
  <View style={{flex:1}}>
  <Text style={styles.flexmenutext3}>  Open now</Text>
  </View>
  <View style={{flex:1}} >
  <Text style={styles.flexmenutext31}>4.3 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
  </View>
  </View>
  </View>
          </View>
            </View>


       </View>
       <View style={{flexDirection:'row', flex: 0.2}}>

       <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
       <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
       <View style={{flex:0.3}}>
       <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu7.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
</View>
<View style={{flex:0.1}}>

         <Text style={styles.flexmenutext1}>NYC Pie</Text>
</View>
         <View style={{flex:0.1}}>

         <Text style={styles.flexmenutext2}>Italian</Text>
</View>
<View style={{flex:0.1}}>
<View style={{flexDirection:'row'}}>
<View style={{flex:1}}>
<Text style={styles.flexmenutext3}>  Open now</Text>
</View>
<View style={{flex:1}} >
<Text style={styles.flexmenutext31}>4.1 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
</View>
</View>
</View>
         </View>
         </View>
         <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
         <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
         <View style={{flex:0.3}}>
         <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu8.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
  </View>
  <View style={{flex:0.1}}>

           <Text style={styles.flexmenutext1}>Moets Curry Leaf</Text>
  </View>
           <View style={{flex:0.1}}>

           <Text style={styles.flexmenutext2}>North Indian,Seafood,Mutton...</Text>
  </View>
  <View style={{flex:0.1}}>
  <View style={{flexDirection:'row'}}>
  <View style={{flex:1}}>
  <Text style={styles.flexmenutext3}>  Open now</Text>
  </View>
  <View style={{flex:1}} >
  <Text style={styles.flexmenutext31}>3.3 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
  </View>
  </View>
  </View>
         </View>
           </View>
           <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
           <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
           <View style={{flex:0.3}}>
           <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu9.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
   </View>
   <View style={{flex:0.1}}>

             <Text style={styles.flexmenutext1}>Dzukou Tribal Kitchen</Text>
   </View>
             <View style={{flex:0.1}}>

             <Text style={styles.flexmenutext2}>Naga</Text>
   </View>
   <View style={{flex:0.1}}>
   <View style={{flexDirection:'row'}}>
   <View style={{flex:1}}>
   <Text style={styles.flexmenutext3}>  Closed now</Text>
   </View>
   <View style={{flex:1}} >
   <Text style={styles.flexmenutext31}>4.5 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
   </View>
   </View>
   </View>
           </View>
             </View>

        </View>
        <View style={{flexDirection:'row', flex: 0.2}}>

        <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
        <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
        <View style={{flex:0.3}}>
        <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu10.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
</View>
<View style={{flex:0.1}}>

          <Text style={styles.flexmenutext1}>menu1</Text>
</View>
          <View style={{flex:0.1}}>

          <Text style={styles.flexmenutext2}>menu2</Text>
</View>
<View style={{flex:0.1}}>
<View style={{flexDirection:'row'}}>
<View style={{flex:1}}>
<Text style={styles.flexmenutext3}>  Open now</Text>
</View>
<View style={{flex:1}} >
<Text style={styles.flexmenutext31}>4.1 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
</View>
</View>
</View>
          </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
          <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
          <View style={{flex:0.3}}>
          <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu11.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
  </View>
  <View style={{flex:0.1}}>

            <Text style={styles.flexmenutext1}>menu1</Text>
  </View>
            <View style={{flex:0.1}}>

            <Text style={styles.flexmenutext2}>menu2</Text>
  </View>
  <View style={{flex:0.1}}>
  <View style={{flexDirection:'row'}}>
  <View style={{flex:1}}>
  <Text style={styles.flexmenutext3}>  Open now</Text>
  </View>
  <View style={{flex:1}} >
  <Text style={styles.flexmenutext31}>4.1 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
  </View>
  </View>
  </View>
          </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white',padding:1}} >
            <View style={{flexDirection:'column',flex:1,flexWrap:'wrap'}}>
            <View style={{flex:0.3}}>
            <Image source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/food5/imgmenu12.png'}} style={{marginTop:5, height:50, width:null,}}></Image>
    </View>
    <View style={{flex:0.1}}>

              <Text style={styles.flexmenutext1}>menu1</Text>
    </View>
              <View style={{flex:0.1}}>

              <Text style={styles.flexmenutext2}>menu2</Text>
    </View>
    <View style={{flex:0.1}}>
    <View style={{flexDirection:'row'}}>
    <View style={{flex:1}}>
    <Text style={styles.flexmenutext3}>  Open now</Text>
    </View>
    <View style={{flex:1}} >
    <Text style={styles.flexmenutext31}>4.1 <Image source={require('./Assets/star.png')} style={{ height:10, width:10, marginTop:1}}></Image></Text>
    </View>
    </View>
    </View>
            </View>
              </View>


         </View>


      </View>
     </View>
   );
 };




 render() {
   return (

     <TabBarIOS
       unselectedTintColor="red"
       tintColor="green"
       unselectedItemTintColor="red"
       selectedItemTintColor="blue"
       barTintColor="white" >
       <TabBarIOS.Item

         icon={{uri: base64Icon, scale: 1.7}}
         //icon={require('https://s3-ap-southeast-1.amazonaws.com/food5/Logo.jpg')}
         //selectedIcon={require('./Assets/Logo.jpg')}
         //iconSize={3}
         renderAsOriginal
         //selected={this.state.selectedTab === 'blueTab'}
         //onPress={() => {
           //this.setState({
             //selectedTab: 'blueTab'

           //});
         //}}

         >

         //{this._renderHomeContent('#000', 'Blue Tab')}
         
       </TabBarIOS.Item>
       <TabBarIOS.Item
       icon={{uri: homeIcon, scale: 1.3}}
        selectedIcon={{uri: homeselectedIcon, scale: 1.3}}
         //icon={require('./Assets/Home_Btn_nrm.png')}
         //selectedIcon={require('./Assets/Home_Btn.png')}
         renderAsOriginal
         iconSize={3}
         selected={this.state.selectedTab === 'blackTab'}
         onPress={() => {
           this.setState({
             selectedTab: 'blackTab',
             presses: this.state.presses + 1

           });
         }}>
         {this._renderHomeContent('#21551C', 'Black Tab', this.state.presses)}
       </TabBarIOS.Item>

       <TabBarIOS.Item
         //icon={require('./Assets/Menu_Btn_nrm.png')}
          icon={{uri: menuIcon, scale: 1.3}}
           selectedIcon={{uri: menuselectedIcon, scale: 1.3}}
         //selectedIcon={require('./Assets/Menu_Btn.png')}
         renderAsOriginal
         iconSize={10}
         selected={this.state.selectedTab === 'yellowTab'}
         onPress={() => {
           this.setState({
             selectedTab: 'yellowTab',
             presses: this.state.presses + 1
           });
         }}>
         {this._renderMenuContent('#21551C', 'Yellow Tab', this.state.presses)}
       </TabBarIOS.Item>

         <TabBarIOS.Item
          icon={{uri: orderIcon, scale: 1.3}}
          selectedIcon={{uri: orderselectedIcon, scale: 1.3}}
           //icon={require('./Assets/Order_Btn_nrm.png')}
           //selectedIcon={require('./Assets/Order_Btn.png')}
           renderAsOriginal

           selected={this.state.selectedTab === 'orangeTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'orangeTab',
               presses: this.state.presses + 1
             });
           }}>
           {this._renderOrderContent('#21551C', 'Orange Tab', this.state.presses)}
         </TabBarIOS.Item>

           <TabBarIOS.Item
            icon={{uri: notifiIcon, scale: 1.3}}
             //icon={require('./Assets/Notifi_Btn_nrm.png')}
             //selectedIcon={require('./Assets/Notifi_Btn.png')}
             selectedIcon={{uri: notifiselectedIcon, scale: 1.3}}
             renderAsOriginal

             selected={this.state.selectedTab === 'greenTab'}
             onPress={() => {
               this.setState({
                 selectedTab: 'greenTab',
                 presses: this.state.presses + 1
               });
             }}>
             {this._renderNotifiContent('#21551C', 'Green Tab', this.state.presses)}
           </TabBarIOS.Item>
     </TabBarIOS>


   );
 }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  menuBar:{
    width: 100,
    height:5,


  },
  backgroundImage: {
    flex: 10,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  navbarIcon: {
    flex: 1,
    margin:1,
  },
  text1: {
    marginLeft: 50,
    marginTop:255,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 42,
    fontFamily: 'Georgia',
    fontWeight: 'bold'
  },
  text2: {
    marginLeft: 50,
    marginTop: -15,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 62,
    fontFamily: 'Georgia',
    fontWeight: '100'
  },
  text3: {
    marginLeft: 50,
    marginTop:6,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    fontFamily:'Arial',
    fontWeight: 'bold'
  },
  text4: {
    marginLeft: 50,
    marginTop:5,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  text41: {
    marginLeft: 50,
    marginTop:0,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  text5: {
    //marginTop: 9,
    marginLeft: 5,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 10,
    fontFamily: 'Avenir',
    fontWeight:'200',
    justifyContent:'flex-start',
  },
  text6: {
    //marginLeft: 65,
    //marginTop:9,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 12,
    fontFamily: 'Avenir Light',
    fontWeight:'200',
    justifyContent:'center',
    //textAlign:'center'
  },
  flexmenutext1: {
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily:'Avenir Light',
    fontSize: 12,
    //fontWeight:'100',
    marginTop:2
  },
  flexmenutext2: {
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily:'Avenir Light',
    fontSize: 7,
    //fontWeight:'200',
    marginTop:0
  },
  flexmenutext3: {
    color: '#ef6c00',
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily:'Arial',
    fontSize: 7,
    textAlign: 'left',
    //fontWeight:'500',
    //marginTop:2
  },
  flexmenutext31: {
    color: '#ef6c00',
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily:'Arial',
    fontSize: 7,
    textAlign: 'right',
    //fontWeight:'500',
    //marginTop:2
  },
list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    margin:6,
    flex: 1,
  },

  grid: {
    width: 133,
    height: 110,
     backgroundColor: 'white',
      padding:1,



}


});
AppRegistry.registerComponent('FoodProject', () => FoodProject);
