const GPS_PRESETS = {
  "中国·济南": [36.6512, 117.1201],
  "中国·北京": [39.9042, 116.4074],
  "中国·上海": [31.2304, 121.4737],
  "中国·深圳": [22.5431, 114.0579],
  "中国·成都": [30.5728, 104.0668],
  "中国·广州": [23.1291, 113.2644],
  "中国·杭州": [30.2741, 120.1551],
  "中国·武汉": [30.5928, 114.3055],
  "日本·东京": [35.6762, 139.6503],
  "日本·大阪": [34.6937, 135.5023],
  "韩国·首尔": [37.5665, 126.978],
  "新加坡": [1.3521, 103.8198],
  "泰国·曼谷": [13.7563, 100.5018],
  "澳大利亚·墨尔本": [-37.8136, 144.9631],
  "澳大利亚·悉尼": [-33.8688, 151.2093],
  "美国·纽约": [40.7128, -74.006],
  "美国·洛杉矶": [34.0522, -118.2437],
  "美国·旧金山": [37.7749, -122.4194],
  "英国·伦敦": [51.5074, -0.1278],
  "法国·巴黎": [48.8566, 2.3522],
  "德国·柏林": [52.52, 13.405],
  "意大利·罗马": [41.9028, 12.4964],
  "俄罗斯·莫斯科": [55.7558, 37.6173],
  "巴西·圣保罗": [-23.5505, -46.6333],
};

const DEVICE_PRESETS = {
  "Apple iPhone 16 Pro": ["Apple", "iPhone 16 Pro"],
  "Apple iPhone 15 Pro": ["Apple", "iPhone 15 Pro"],
  "Apple iPhone 14": ["Apple", "iPhone 14"],
  "Apple iPhone 13": ["Apple", "iPhone 13"],
  "小米 15 Ultra": ["Xiaomi", "Xiaomi 15 Ultra"],
  "小米 14 Ultra": ["Xiaomi", "Xiaomi 14 Ultra"],
  "小米 14": ["Xiaomi", "Xiaomi 14"],
  "华为 Mate 70 Pro": ["HUAWEI", "HUA-AL00"],
  "华为 Mate 60 Pro": ["HUAWEI", "ALN-AL00"],
  "OPPO Find X8 Pro": ["OPPO", "PHX110"],
  "三星 Galaxy S25 Ultra": ["samsung", "SM-S9380"],
  "三星 Galaxy S24": ["samsung", "SM-S9210"],
  "Google Pixel 9 Pro": ["Google", "Pixel 9 Pro"],
  "Google Pixel 8 Pro": ["Google", "Pixel 8 Pro"],
  "索尼 ILCE-7RM5 (A7R5)": ["SONY", "ILCE-7RM5"],
  "索尼 ILCE-7M3 (A7M3)": ["SONY", "ILCE-7M3"],
  "尼康 Z 9": ["NIKON", "NIKON Z 9"],
  "尼康 Z 6III": ["NIKON", "NIKON Z 6_3"],
  "佳能 EOS R5 Mark II": ["Canon", "Canon EOS R5m2"],
  "佳能 EOS R6": ["Canon", "Canon EOS R6"],
  "富士 X-T5": ["FUJIFILM", "X-T5"],
  "富士 GFX 100S II": ["FUJIFILM", "GFX100S II"],
};

const OUTPUT_MIME = {
  JPEG: "image/jpeg",
  PNG: "image/png",
  WEBP: "image/webp",
};

const OUTPUT_EXT = {
  JPEG: ".jpg",
  PNG: ".png",
  WEBP: ".webp",
};

const METADATA_TOKEN_LABELS = {
  Altitude: "海拔",
  Aperture: "光圈",
  Area: "区域",
  Artist: "作者",
  Backward: "向后兼容",
  Balance: "平衡",
  Bearing: "方位",
  Bits: "位深",
  Brightness: "亮度",
  Camera: "相机",
  Capture: "拍摄",
  Color: "色彩",
  Colour: "色彩",
  Comment: "备注",
  Composite: "合成",
  Compression: "压缩",
  Computer: "计算机",
  Connection: "连接",
  Copyright: "版权",
  CMM: "色彩管理",
  Creator: "创建者",
  Date: "日期",
  Description: "说明",
  Dest: "目标",
  Device: "设备",
  Digital: "数字",
  Digitized: "数字化",
  Dimension: "尺寸",
  Direction: "方向",
  DNG: "DNG",
  Error: "误差",
  Exif: "EXIF",
  Exposure: "曝光",
  Equivalent: "等效",
  Factor: "倍率",
  Field: "视场",
  File: "文件",
  Flash: "闪光灯",
  FNumber: "光圈值",
  Focal: "焦距",
  Format: "格式",
  GPS: "GPS",
  GIF: "GIF",
  Height: "高度",
  Host: "主机",
  ICC: "ICC",
  IFD: "目录",
  ISO: "ISO",
  IPTC: "IPTC",
  Image: "图像",
  Img: "图像",
  Intent: "意图",
  Interpretation: "解释方式",
  JFIF: "JFIF",
  JPEG: "JPEG",
  Latitude: "纬度",
  Length: "长度",
  Lens: "镜头",
  Longitude: "经度",
  MPF: "多图",
  Maker: "厂商",
  Matte: "蒙版",
  Metering: "测光",
  Model: "型号",
  Modify: "修改",
  Name: "名称",
  New: "新",
  Note: "备注",
  Number: "编号",
  Offset: "时区偏移",
  Orientation: "方向",
  Original: "原始",
  Per: "每",
  Photographic: "摄影",
  Photometric: "光度",
  Photoshop: "Photoshop",
  Pixel: "像素",
  Platform: "平台",
  PNG: "PNG",
  Pointer: "指针",
  Positioning: "定位",
  Preferred: "首选",
  Primary: "主",
  Processing: "处理",
  Profile: "配置",
  Program: "程序",
  Ref: "参考",
  Rendering: "渲染",
  Resolution: "分辨率",
  RIFF: "RIFF",
  Ratings: "评级",
  Sample: "采样",
  Scale: "比例",
  Scene: "场景",
  Segmentation: "分割",
  Semantic: "语义",
  Sensing: "感光",
  Serial: "序列号",
  Shutter: "快门",
  Signature: "签名",
  Software: "软件",
  Space: "空间",
  Speed: "速度",
  Specification: "规格",
  Sub: "子",
  Subject: "主体",
  Subfile: "子文件",
  Text: "文本",
  Time: "时间",
  Timestamp: "时间戳",
  Type: "类型",
  Unique: "唯一",
  Unit: "单位",
  User: "用户",
  Value: "数值",
  Version: "版本",
  View: "视角",
  White: "白色",
  Width: "宽度",
  XMP: "XMP",
  Zoom: "变焦",
  "35efl": "35mm 等效焦距",
  "35mm": "35mm",
};

const METADATA_TAG_INFO = {
  Make: { label: "设备品牌", description: "记录拍摄设备厂商。" },
  Model: { label: "设备型号", description: "记录拍摄设备型号。" },
  Software: { label: "软件版本", description: "记录系统、相机固件或后期软件版本。" },
  HostComputer: { label: "主机标识", description: "记录写入元数据的主机或设备名。" },
  Artist: { label: "作者", description: "记录作者或创建者名称。" },
  Copyright: { label: "版权声明", description: "记录版权或授权信息。" },
  ImageDescription: { label: "图片说明", description: "记录标题、描述或备注。" },
  DateTime: { label: "通用时间", description: "记录通用 EXIF 时间，常作为修改时间参考。" },
  Orientation: { label: "方向标记", description: "控制图片显示方向，乱改可能导致横竖颠倒。" },
  XResolution: { label: "横向分辨率", description: "记录横向分辨率单位值，主要用于打印或显示解释。" },
  YResolution: { label: "纵向分辨率", description: "记录纵向分辨率单位值，主要用于打印或显示解释。" },
  ResolutionUnit: { label: "分辨率单位", description: "定义分辨率使用 dpi 还是 dpcm 等单位。" },
  "Exif IFD Pointer": { label: "EXIF 目录指针", description: "指向 EXIF 子目录的位置，属于结构字段。" },
  "GPS Info IFD Pointer": { label: "GPS 目录指针", description: "指向 GPS 子目录的位置，属于结构字段。" },
  LensMake: { label: "镜头品牌", description: "记录镜头厂商。" },
  LensModel: { label: "镜头型号", description: "记录镜头型号。" },
  LensSerialNumber: { label: "镜头序列号", description: "记录镜头唯一编号。" },
  LensSpecification: { label: "镜头规格", description: "记录镜头焦段和光圈范围等规格。" },
  UserComment: { label: "用户备注", description: "记录自定义备注、Nonce 或隐藏说明。" },
  DateTimeOriginal: { label: "拍摄时间", description: "记录照片实际拍摄时间。" },
  DateTimeDigitized: { label: "数字化时间", description: "记录图像被数字化或导出的时间。" },
  OffsetTime: { label: "时区偏移", description: "记录 EXIF 时间对应的时区。" },
  OffsetTimeOriginal: { label: "拍摄时区", description: "记录拍摄时间对应的时区。" },
  OffsetTimeDigitized: { label: "数字化时区", description: "记录数字化时间对应的时区。" },
  ImageUniqueID: { label: "图片唯一 ID", description: "记录图像唯一标识，常用于追踪或去重。" },
  SubSecTime: { label: "亚秒时间", description: "记录秒以下的补充时间。" },
  SubSecTimeOriginal: { label: "拍摄亚秒", description: "记录拍摄时间的亚秒部分。" },
  SubSecTimeDigitized: { label: "数字化亚秒", description: "记录数字化时间的亚秒部分。" },
  ExposureTime: { label: "曝光时间", description: "记录快门时长，例如 1/120 秒。" },
  FNumber: { label: "光圈值", description: "记录镜头光圈，例如 f/1.8。" },
  FocalLength: { label: "实际焦距", description: "记录镜头实际焦距。" },
  FocalLengthIn35mmFormat: { label: "35mm 等效焦距", description: "记录换算到 35mm 全画幅后的等效焦距。" },
  FocalLengthIn35mmFilm: { label: "35mm 等效焦距", description: "记录换算到 35mm 全画幅后的等效焦距。" },
  FocalLength35efl: { label: "35mm 等效焦距", description: "由读取器推导出的 35mm 等效焦距。" },
  PhotographicSensitivity: { label: "ISO 感光度", description: "记录拍摄时的 ISO 感光度。" },
  ISOSpeedRatings: { label: "ISO 感光度", description: "记录拍摄时的 ISO 感光度。" },
  ExposureProgram: { label: "曝光程序", description: "记录相机使用的曝光模式程序。" },
  ExposureMode: { label: "曝光模式", description: "记录自动、手动等曝光方式。" },
  MeteringMode: { label: "测光模式", description: "记录相机如何测量场景亮度。" },
  WhiteBalance: { label: "白平衡", description: "记录自动或手动白平衡状态。" },
  Flash: { label: "闪光灯状态", description: "记录闪光灯是否触发。" },
  SceneCaptureType: { label: "场景拍摄类型", description: "记录人像、风景、夜景等场景类型。" },
  SceneType: { label: "场景类型", description: "记录场景或采集类型标识。" },
  DigitalZoomRatio: { label: "数字变焦倍率", description: "记录数字变焦倍率。" },
  SensingMethod: { label: "感光方式", description: "记录图像传感器的采样方式。" },
  ExifVersion: { label: "EXIF 版本", description: "记录 EXIF 标准版本，属于兼容字段。" },
  ColorSpace: { label: "色彩空间", description: "定义 sRGB、Uncalibrated 等色彩解释方式。" },
  "Color Space": { label: "色彩空间", description: "定义 ICC 配置所使用的色彩空间。" },
  PixelXDimension: { label: "像素宽度", description: "记录 EXIF 中声明的像素宽度。" },
  PixelYDimension: { label: "像素高度", description: "记录 EXIF 中声明的像素高度。" },
  ImageWidth: { label: "图像宽度", description: "记录文件容器中的实际图像宽度。" },
  ImageLength: { label: "图像高度", description: "记录文件容器中的实际图像高度。" },
  BitsPerSample: { label: "每通道位深", description: "记录每个颜色通道的位深。" },
  Compression: { label: "压缩方式", description: "记录图像使用的压缩编码方式。" },
  PhotometricInterpretation: { label: "颜色解释方式", description: "定义像素如何被解释成颜色。" },
  NewSubfileType: { label: "子文件类型", description: "记录容器中的子图层或缩略图类型。" },
  UniqueCameraModel: { label: "唯一相机型号", description: "记录更精确的厂商机型名。" },
  DNGVersion: { label: "DNG 版本", description: "记录 DNG/RAW 容器版本。" },
  DNGBackwardVersion: { label: "DNG 向后兼容版本", description: "记录 DNG 兼容的最低版本。" },
  ProfileName: { label: "配置文件名", description: "记录颜色或相机配置文件名称。" },
  ShutterSpeedValue: { label: "快门速度值", description: "记录以曝光值形式表示的快门速度。" },
  ApertureValue: { label: "光圈值（EV）", description: "记录以曝光值形式表示的光圈。" },
  BrightnessValue: { label: "亮度值", description: "记录场景亮度估计值。" },
  ExposureBiasValue: { label: "曝光补偿", description: "记录拍摄时的曝光补偿。" },
  SubjectArea: { label: "主体区域", description: "记录对焦或主体区域位置。" },
  MakerNote: { label: "厂商私有备注", description: "厂商私有元数据，常与算法或辅助图层相关。" },
  CompositeImage: { label: "合成图像标记", description: "记录图像是否由多张图合成。" },
  Latitude: { label: "纬度", description: "记录拍摄位置纬度。" },
  Longitude: { label: "经度", description: "记录拍摄位置经度。" },
  Altitude: { label: "海拔", description: "记录拍摄位置海拔。" },
  GPSLatitude: { label: "GPS 纬度", description: "记录 GPS 纬度坐标。" },
  GPSLongitude: { label: "GPS 经度", description: "记录 GPS 经度坐标。" },
  GPSAltitude: { label: "GPS 海拔", description: "记录 GPS 海拔高度。" },
  GPSLatitudeRef: { label: "纬度半球", description: "定义纬度属于北纬还是南纬。" },
  GPSLongitudeRef: { label: "经度半球", description: "定义经度属于东经还是西经。" },
  GPSAltitudeRef: { label: "海拔参考", description: "定义海拔是高于还是低于海平面。" },
  GPSDateStamp: { label: "GPS 日期", description: "记录 GPS 时间对应的日期。" },
  GPSTimeStamp: { label: "GPS 时间", description: "记录 GPS 捕获时间。" },
  GPSDateTime: { label: "GPS 日期时间", description: "记录完整 GPS 时间。" },
  GPSSpeed: { label: "GPS 速度", description: "记录移动速度。" },
  GPSSpeedRef: { label: "速度单位", description: "定义 GPS 速度使用 km/h、mph 等单位。" },
  Speed: { label: "速度", description: "记录移动速度。" },
  GPSImgDirection: { label: "拍摄朝向", description: "记录镜头拍摄朝向角度。" },
  GPSImgDirectionRef: { label: "朝向参考", description: "定义朝向以真北或磁北为参考。" },
  ImgDirection: { label: "拍摄朝向", description: "记录镜头拍摄朝向角度。" },
  GPSDestBearing: { label: "目标方位", description: "记录目标方向角度。" },
  GPSDestBearingRef: { label: "目标方位参考", description: "定义目标方位参考方式。" },
  GPSHPositioningError: { label: "水平定位误差", description: "记录 GPS 水平定位误差。" },
  SemanticSegmentationMatteVersion: { label: "语义分割蒙版版本", description: "与厂商辅助抠图或景深算法相关的版本字段。" },
  "semanticSegmentationMatte:SemanticSegmentationMatteVersion": {
    label: "语义分割蒙版版本",
    description: "与厂商辅助抠图或景深算法相关的版本字段。"
  },
  FileType: { label: "文件类型", description: "记录容器或文件格式类型。" },
  "Preferred CMM type": { label: "首选色彩管理引擎", description: "ICC 配置里指定的色彩管理引擎。" },
  "Profile Version": { label: "配置版本", description: "ICC 色彩配置文件版本。" },
  "Profile/Device class": { label: "配置设备类别", description: "ICC 配置文件对应的设备类别。" },
  "Connection Space": { label: "连接空间", description: "ICC 配置中的连接色彩空间。" },
  "ICC Profile Date": { label: "ICC 配置日期", description: "ICC 配置文件生成时间。" },
  "ICC Signature": { label: "ICC 签名", description: "ICC 配置文件签名。" },
  "Primary Platform": { label: "主平台", description: "ICC 配置目标平台。" },
  "Device Manufacturer": { label: "设备制造商", description: "ICC 配置记录的设备制造商。" },
  "Device Model Number": { label: "设备型号编号", description: "ICC 配置记录的设备型号。" },
  "Rendering Intent": { label: "渲染意图", description: "ICC 配置中的颜色映射策略。" },
  "Profile Creator": { label: "配置创建者", description: "ICC 配置文件创建者。" },
  "ICC Description": { label: "ICC 描述", description: "ICC 配置文件描述文本。" },
  "ICC Copyright": { label: "ICC 版权", description: "ICC 配置文件版权信息。" },
  ScaleFactorTo35mmEquivalent: { label: "35mm 等效倍率", description: "记录换算到 35mm 画幅的倍率。" },
  FieldOfView: { label: "视角", description: "记录镜头可视范围角度。" },
};

const SAFE_RANDOM_TYPES = new Set([
  "make",
  "model",
  "lens-make",
  "lens-model",
  "software",
  "host",
  "serial",
  "uuid",
  "comment",
  "datetime",
  "timezone",
  "subsec",
  "fnumber",
  "exposure-time",
  "iso",
  "focal-length",
  "focal-35",
  "gps-latitude",
  "gps-longitude",
  "gps-altitude",
  "gps-date",
  "gps-time",
  "direction",
  "speed",
]);

const HIGH_IMPACT_RANDOM_GROUPS = new Set([
  "icc",
  "makerNotes",
  "composite",
  "file",
  "jfif",
  "png",
  "pngText",
  "pngFile",
  "mpf",
  "photoshop",
  "riff",
  "gif",
]);

const BLOCKED_RANDOM_TAG_KEYS = new Set([
  "Orientation",
  "ColorSpace",
  "Color Space",
  "PixelXDimension",
  "PixelYDimension",
  "ImageWidth",
  "ImageLength",
  "BitsPerSample",
  "Compression",
  "PhotometricInterpretation",
  "XResolution",
  "YResolution",
  "ResolutionUnit",
  "ExifVersion",
  "SensingMethod",
  "Exif IFD Pointer",
  "GPS Info IFD Pointer",
  "NewSubfileType",
  "MakerNote",
  "Profile Version",
  "Profile/Device class",
  "Connection Space",
  "ICC Signature",
  "Preferred CMM type",
  "Primary Platform",
  "Device Manufacturer",
  "Device Model Number",
  "Rendering Intent",
  "Profile Creator",
  "SemanticSegmentationMatteVersion",
  "semanticSegmentationMatte:SemanticSegmentationMatteVersion",
]);

function splitMetadataWords(value) {
  const normalized = String(value || "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/[_:/.-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return normalized ? normalized.split(" ") : [];
}

function buildFallbackMetadataLabel(tagKey, fallbackLabel = "") {
  const seed = fallbackLabel || tagKey;
  if (!seed) {
    return "";
  }
  if (/[\u4e00-\u9fff]/.test(seed)) {
    return seed;
  }

  const words = splitMetadataWords(seed);
  if (!words.length) {
    return seed;
  }

  const translated = words.map((word) => {
    return (
      METADATA_TOKEN_LABELS[word] ||
      METADATA_TOKEN_LABELS[word.toUpperCase()] ||
      METADATA_TOKEN_LABELS[word.toLowerCase()] ||
      ""
    );
  });

  const translatedCount = translated.filter(Boolean).length;
  if (!translatedCount) {
    return seed;
  }

  return translated
    .map((word, index) => word || words[index])
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildGenericMetadataDescription(groupKey, label) {
  if (groupKey === "gps") {
    return `${label} 属于定位信息，常用于记录坐标、方向、速度或定位误差。`;
  }
  if (groupKey === "exif") {
    return `${label} 属于标准拍摄元数据，常用于记录设备、时间、镜头或曝光信息。`;
  }
  if (groupKey === "icc") {
    return `${label} 属于色彩配置字段，主要影响颜色解释与显示兼容。`;
  }
  if (groupKey === "makerNotes") {
    return `${label} 属于厂商私有字段，常和算法、辅助图层或相机内部处理相关。`;
  }
  if (groupKey === "composite") {
    return `${label} 是读取器推导出的综合字段，适合查看，不适合乱随机。`;
  }
  if (groupKey === "file" || groupKey === "jfif" || groupKey === "png" || groupKey === "pngText" || groupKey === "pngFile" || groupKey === "mpf" || groupKey === "riff" || groupKey === "gif") {
    return `${label} 属于文件容器或编码结构字段，主要用于解码和兼容。`;
  }
  return `${label} 属于图片元数据的一部分。`;
}

function getMetadataTagPresentation(groupKey, tagKey, fallbackLabel = "") {
  const info =
    METADATA_TAG_INFO[`${groupKey}.${tagKey}`] ||
    METADATA_TAG_INFO[tagKey] ||
    METADATA_TAG_INFO[fallbackLabel];

  return {
    label: info?.label || buildFallbackMetadataLabel(tagKey, fallbackLabel) || fallbackLabel || tagKey,
    description: info?.description || buildGenericMetadataDescription(groupKey, info?.label || fallbackLabel || tagKey),
  };
}

function getMetadataRandomPolicy(groupKey, tagKey, config) {
  if (HIGH_IMPACT_RANDOM_GROUPS.has(groupKey)) {
    return {
      allowRandom: false,
      hint: "这是容器、色彩配置、综合推导或厂商私有字段，随机后可能引发显示异常、兼容问题或辅助图层错乱。",
    };
  }

  if (BLOCKED_RANDOM_TAG_KEYS.has(tagKey)) {
    return {
      allowRandom: false,
      hint: "这个字段会影响方向、色彩解释、像素尺寸或元数据结构，一键随机已自动保护。",
    };
  }

  if (!config?.randomType || !SAFE_RANDOM_TYPES.has(config.randomType)) {
    return {
      allowRandom: false,
      hint: "这个字段暂未进入安全随机名单，避免写出不稳定结果；如有需要可以手动自定义。",
    };
  }

  return {
    allowRandom: true,
    hint: "已纳入安全随机名单，一键随机会优先处理这类隐私相关字段。",
  };
}

function localizeLooseMetadataLabel(label) {
  return getMetadataTagPresentation("", label, label).label;
}

const PRESET_MIN_JITTER_METERS = 6;
const PRESET_MAX_JITTER_METERS = 22;
const RANDOM_TIME_MAX_DAYS_BACK = 120;
const APPLE_METADATA_OUTPUT_FORMAT = "JPEG";

const SMARTPHONE_DEFAULT_EXIF = {
  focalLength: [686, 100],
  focalLengthIn35mmFilm: 24,
  fNumber: [178, 100],
  exposureTime: [1, 120],
  iso: 80,
};

const CAMERA_DEFAULT_EXIF = {
  focalLength: [5000, 100],
  focalLengthIn35mmFilm: 50,
  fNumber: [280, 100],
  exposureTime: [1, 125],
  iso: 100,
};

const DEVICE_EXIF_OVERRIDES = {
  "Apple iPhone 16 Pro": {
    lensMake: "Apple",
    lensModel: "iPhone 16 Pro back triple camera 6.86mm f/1.78",
    focalLength: [686, 100],
    focalLengthIn35mmFilm: 24,
    fNumber: [178, 100],
    exposureTime: [1, 120],
    iso: 80,
  },
  "Apple iPhone 15 Pro": {
    lensMake: "Apple",
    lensModel: "iPhone 15 Pro back triple camera 6.86mm f/1.78",
    focalLength: [686, 100],
    focalLengthIn35mmFilm: 24,
    fNumber: [178, 100],
    exposureTime: [1, 120],
    iso: 80,
  },
  "Apple iPhone 14": {
    lensMake: "Apple",
    lensModel: "iPhone 14 back dual wide camera 5.70mm f/1.50",
    focalLength: [570, 100],
    focalLengthIn35mmFilm: 26,
    fNumber: [150, 100],
    exposureTime: [1, 100],
    iso: 80,
  },
  "Apple iPhone 13": {
    lensMake: "Apple",
    lensModel: "iPhone 13 back dual wide camera 5.10mm f/1.60",
    focalLength: [510, 100],
    focalLengthIn35mmFilm: 26,
    fNumber: [160, 100],
    exposureTime: [1, 100],
    iso: 80,
  },
  "小米 15 Ultra": {
    lensMake: "Xiaomi",
    lensModel: "Xiaomi 15 Ultra back camera 8.70mm f/1.63",
    focalLength: [870, 100],
    focalLengthIn35mmFilm: 23,
    fNumber: [163, 100],
    exposureTime: [1, 100],
    iso: 100,
  },
  "小米 14 Ultra": {
    lensMake: "Xiaomi",
    lensModel: "Xiaomi 14 Ultra back camera 8.63mm f/1.63",
    focalLength: [863, 100],
    focalLengthIn35mmFilm: 23,
    fNumber: [163, 100],
    exposureTime: [1, 100],
    iso: 100,
  },
  "小米 14": {
    lensMake: "Xiaomi",
    lensModel: "Xiaomi 14 back camera 6.90mm f/1.60",
    focalLength: [690, 100],
    focalLengthIn35mmFilm: 23,
    fNumber: [160, 100],
    exposureTime: [1, 100],
    iso: 100,
  },
  "华为 Mate 70 Pro": {
    lensMake: "HUAWEI",
    lensModel: "HUAWEI Mate 70 Pro back camera 6.35mm f/1.40",
    focalLength: [635, 100],
    focalLengthIn35mmFilm: 24,
    fNumber: [140, 100],
    exposureTime: [1, 100],
    iso: 100,
  },
  "华为 Mate 60 Pro": {
    lensMake: "HUAWEI",
    lensModel: "HUAWEI Mate 60 Pro back camera 6.35mm f/1.40",
    focalLength: [635, 100],
    focalLengthIn35mmFilm: 24,
    fNumber: [140, 100],
    exposureTime: [1, 100],
    iso: 100,
  },
  "OPPO Find X8 Pro": {
    lensMake: "OPPO",
    lensModel: "OPPO Find X8 Pro back camera 6.06mm f/1.60",
    focalLength: [606, 100],
    focalLengthIn35mmFilm: 23,
    fNumber: [160, 100],
    exposureTime: [1, 100],
    iso: 100,
  },
  "三星 Galaxy S25 Ultra": {
    lensMake: "samsung",
    lensModel: "Samsung Galaxy S25 Ultra back camera 6.30mm f/1.70",
    focalLength: [630, 100],
    focalLengthIn35mmFilm: 24,
    fNumber: [170, 100],
    exposureTime: [1, 120],
    iso: 80,
  },
  "三星 Galaxy S24": {
    lensMake: "samsung",
    lensModel: "Samsung Galaxy S24 back camera 5.40mm f/1.80",
    focalLength: [540, 100],
    focalLengthIn35mmFilm: 24,
    fNumber: [180, 100],
    exposureTime: [1, 120],
    iso: 80,
  },
  "Google Pixel 9 Pro": {
    lensMake: "Google",
    lensModel: "Pixel 9 Pro back camera 6.90mm f/1.68",
    focalLength: [690, 100],
    focalLengthIn35mmFilm: 25,
    fNumber: [168, 100],
    exposureTime: [1, 120],
    iso: 80,
  },
  "Google Pixel 8 Pro": {
    lensMake: "Google",
    lensModel: "Pixel 8 Pro back camera 6.90mm f/1.68",
    focalLength: [690, 100],
    focalLengthIn35mmFilm: 25,
    fNumber: [168, 100],
    exposureTime: [1, 120],
    iso: 80,
  },
  "索尼 ILCE-7RM5 (A7R5)": {
    lensMake: "SONY",
    lensModel: "FE 50mm F1.8",
    focalLength: [5000, 100],
    focalLengthIn35mmFilm: 50,
    fNumber: [180, 100],
    exposureTime: [1, 160],
    iso: 100,
  },
  "索尼 ILCE-7M3 (A7M3)": {
    lensMake: "SONY",
    lensModel: "FE 35mm F1.8",
    focalLength: [3500, 100],
    focalLengthIn35mmFilm: 35,
    fNumber: [180, 100],
    exposureTime: [1, 160],
    iso: 100,
  },
  "尼康 Z 9": {
    lensMake: "NIKON",
    lensModel: "NIKKOR Z 50mm f/1.8 S",
    focalLength: [5000, 100],
    focalLengthIn35mmFilm: 50,
    fNumber: [180, 100],
    exposureTime: [1, 200],
    iso: 100,
  },
  "尼康 Z 6III": {
    lensMake: "NIKON",
    lensModel: "NIKKOR Z 35mm f/1.8 S",
    focalLength: [3500, 100],
    focalLengthIn35mmFilm: 35,
    fNumber: [180, 100],
    exposureTime: [1, 200],
    iso: 100,
  },
  "佳能 EOS R5 Mark II": {
    lensMake: "Canon",
    lensModel: "RF50mm F1.8 STM",
    focalLength: [5000, 100],
    focalLengthIn35mmFilm: 50,
    fNumber: [180, 100],
    exposureTime: [1, 200],
    iso: 100,
  },
  "佳能 EOS R6": {
    lensMake: "Canon",
    lensModel: "RF35mm F1.8 MACRO IS STM",
    focalLength: [3500, 100],
    focalLengthIn35mmFilm: 35,
    fNumber: [180, 100],
    exposureTime: [1, 200],
    iso: 100,
  },
  "富士 X-T5": {
    lensMake: "FUJIFILM",
    lensModel: "XF35mmF1.4 R",
    focalLength: [3500, 100],
    focalLengthIn35mmFilm: 53,
    fNumber: [140, 100],
    exposureTime: [1, 250],
    iso: 125,
  },
  "富士 GFX 100S II": {
    lensMake: "FUJIFILM",
    lensModel: "GF63mmF2.8 R WR",
    focalLength: [6300, 100],
    focalLengthIn35mmFilm: 50,
    fNumber: [280, 100],
    exposureTime: [1, 250],
    iso: 100,
  },
};

const SMARTPHONE_BRANDS = new Set(["Apple", "Xiaomi", "HUAWEI", "OPPO", "samsung", "Google"]);
const SETTINGS_STORAGE_KEY = "image-privacy-tool-workers-settings-v4";
const PRESET_CONFIGS = {
  avatar: {
    label: "反关联模式",
    description: "适合头像、封面和资料图。优先打断视觉指纹与直接关联，默认清理 EXIF。",
    values: {
      tweakPhash: true,
      microResample: true,
      randomizeMetadata: true,
      randomExtraExif: false,
      randomTimestamp: false,
      stripExif: true,
      randomizeFileName: true,
      outputFormat: "JPEG",
      quality: 94,
      hiddenNote: "",
    },
  },
  balanced: {
    label: "平衡模式",
    description: "适合日常图片。尽量改变 pHash，同时保留更自然的拍摄时间和设备信息。",
    values: {
      tweakPhash: true,
      microResample: true,
      randomizeMetadata: true,
      randomExtraExif: true,
      randomTimestamp: true,
      stripExif: false,
      randomizeFileName: true,
      outputFormat: "JPEG",
      quality: 95,
    },
  },
  apple: {
    label: "苹果兼容模式",
    description: "优先让 iPhone 和 macOS 更容易识别设备、镜头、GPS 与拍摄时间。",
    values: {
      tweakPhash: true,
      microResample: true,
      randomizeMetadata: true,
      randomExtraExif: true,
      randomTimestamp: true,
      stripExif: false,
      randomizeFileName: false,
      outputFormat: "JPEG",
      quality: 96,
      deviceName: "Apple iPhone 15 Pro",
    },
  },
};

const EXIF_EDITOR_CONFIGS = {
  Make: { ifd: "0th", tag: () => piexif?.ImageIFD?.Make, valueType: "text", randomType: "make" },
  Model: { ifd: "0th", tag: () => piexif?.ImageIFD?.Model, valueType: "text", randomType: "model" },
  Software: { ifd: "0th", tag: () => piexif?.ImageIFD?.Software, valueType: "text", randomType: "software" },
  HostComputer: { ifd: "0th", tag: () => piexif?.ImageIFD?.HostComputer, valueType: "text", randomType: "host" },
  Artist: { ifd: "0th", tag: () => piexif?.ImageIFD?.Artist, valueType: "text", randomType: "text" },
  Copyright: { ifd: "0th", tag: () => piexif?.ImageIFD?.Copyright, valueType: "text", randomType: "text" },
  ImageDescription: { ifd: "0th", tag: () => piexif?.ImageIFD?.ImageDescription, valueType: "text", randomType: "text" },
  DateTime: { ifd: "0th", tag: () => piexif?.ImageIFD?.DateTime, valueType: "datetime", randomType: "datetime" },
  Orientation: { ifd: "0th", tag: () => piexif?.ImageIFD?.Orientation, valueType: "int", randomType: "orientation" },
  LensMake: { ifd: "Exif", tag: () => piexif?.ExifIFD?.LensMake, valueType: "text", randomType: "lens-make" },
  LensModel: { ifd: "Exif", tag: () => piexif?.ExifIFD?.LensModel, valueType: "text", randomType: "lens-model" },
  LensSerialNumber: { ifd: "Exif", tag: () => piexif?.ExifIFD?.LensSerialNumber, valueType: "text", randomType: "serial" },
  UserComment: { ifd: "Exif", tag: () => piexif?.ExifIFD?.UserComment, valueType: "user-comment", randomType: "comment" },
  DateTimeOriginal: { ifd: "Exif", tag: () => piexif?.ExifIFD?.DateTimeOriginal, valueType: "datetime", randomType: "datetime" },
  DateTimeDigitized: { ifd: "Exif", tag: () => piexif?.ExifIFD?.DateTimeDigitized, valueType: "datetime", randomType: "datetime" },
  OffsetTime: { ifd: "Exif", tag: () => piexif?.ExifIFD?.OffsetTime, valueType: "timezone", randomType: "timezone" },
  OffsetTimeOriginal: { ifd: "Exif", tag: () => piexif?.ExifIFD?.OffsetTimeOriginal, valueType: "timezone", randomType: "timezone" },
  OffsetTimeDigitized: { ifd: "Exif", tag: () => piexif?.ExifIFD?.OffsetTimeDigitized, valueType: "timezone", randomType: "timezone" },
  ImageUniqueID: { ifd: "Exif", tag: () => piexif?.ExifIFD?.ImageUniqueID, valueType: "text", randomType: "uuid" },
  SubSecTime: { ifd: "Exif", tag: () => piexif?.ExifIFD?.SubSecTime, valueType: "subsec", randomType: "subsec" },
  SubSecTimeOriginal: { ifd: "Exif", tag: () => piexif?.ExifIFD?.SubSecTimeOriginal, valueType: "subsec", randomType: "subsec" },
  SubSecTimeDigitized: { ifd: "Exif", tag: () => piexif?.ExifIFD?.SubSecTimeDigitized, valueType: "subsec", randomType: "subsec" },
  ExposureTime: { ifd: "Exif", tag: () => piexif?.ExifIFD?.ExposureTime, valueType: "rational-seconds", randomType: "exposure-time" },
  FNumber: { ifd: "Exif", tag: () => piexif?.ExifIFD?.FNumber, valueType: "rational-number", randomType: "fnumber" },
  FocalLength: { ifd: "Exif", tag: () => piexif?.ExifIFD?.FocalLength, valueType: "rational-number", randomType: "focal-length" },
  FocalLengthIn35mmFormat: {
    ifd: "Exif",
    tag: () => piexif?.ExifIFD?.FocalLengthIn35mmFilm,
    valueType: "int",
    randomType: "focal-35",
  },
  FocalLengthIn35mmFilm: {
    ifd: "Exif",
    tag: () => piexif?.ExifIFD?.FocalLengthIn35mmFilm,
    valueType: "int",
    randomType: "focal-35",
  },
  PhotographicSensitivity: {
    ifd: "Exif",
    tag: () => piexif?.ExifIFD?.PhotographicSensitivity || piexif?.ExifIFD?.ISOSpeedRatings,
    valueType: "int",
    randomType: "iso",
  },
  ISOSpeedRatings: {
    ifd: "Exif",
    tag: () => piexif?.ExifIFD?.PhotographicSensitivity || piexif?.ExifIFD?.ISOSpeedRatings,
    valueType: "int",
    randomType: "iso",
  },
  ExposureProgram: { ifd: "Exif", tag: () => piexif?.ExifIFD?.ExposureProgram, valueType: "int", randomType: "exposure-program" },
  ExposureMode: { ifd: "Exif", tag: () => piexif?.ExifIFD?.ExposureMode, valueType: "int", randomType: "exposure-mode" },
  MeteringMode: { ifd: "Exif", tag: () => piexif?.ExifIFD?.MeteringMode, valueType: "int", randomType: "metering" },
  WhiteBalance: { ifd: "Exif", tag: () => piexif?.ExifIFD?.WhiteBalance, valueType: "int", randomType: "white-balance" },
  Flash: { ifd: "Exif", tag: () => piexif?.ExifIFD?.Flash, valueType: "int", randomType: "flash" },
  SceneCaptureType: { ifd: "Exif", tag: () => piexif?.ExifIFD?.SceneCaptureType, valueType: "int", randomType: "scene" },
  DigitalZoomRatio: { ifd: "Exif", tag: () => piexif?.ExifIFD?.DigitalZoomRatio, valueType: "rational-number", randomType: "zoom" },
  SensingMethod: { ifd: "Exif", tag: () => piexif?.ExifIFD?.SensingMethod, valueType: "int", randomType: "sensing" },
  ExifVersion: { ifd: "Exif", tag: () => piexif?.ExifIFD?.ExifVersion, valueType: "text", randomType: "exif-version" },
  ColorSpace: { ifd: "Exif", tag: () => piexif?.ExifIFD?.ColorSpace, valueType: "int", randomType: "color-space" },
  PixelXDimension: { ifd: "Exif", tag: () => piexif?.ExifIFD?.PixelXDimension, valueType: "int", randomType: "dimension-x" },
  PixelYDimension: { ifd: "Exif", tag: () => piexif?.ExifIFD?.PixelYDimension, valueType: "int", randomType: "dimension-y" },
};

const GPS_EDITOR_CONFIGS = {
  Latitude: { valueType: "gps-latitude", randomType: "gps-latitude" },
  Longitude: { valueType: "gps-longitude", randomType: "gps-longitude" },
  Altitude: { valueType: "gps-altitude", randomType: "gps-altitude" },
  GPSDateStamp: { valueType: "gps-date", randomType: "gps-date" },
  GPSTimeStamp: { valueType: "gps-time", randomType: "gps-time" },
  ImgDirection: { valueType: "int", randomType: "direction" },
  Speed: { valueType: "int", randomType: "speed" },
};

const dom = {
  form: document.getElementById("processForm"),
  dropZone: document.getElementById("dropZone"),
  images: document.getElementById("images"),
  gpsName: document.getElementById("gpsName"),
  deviceName: document.getElementById("deviceName"),
  customLat: document.getElementById("customLat"),
  customLon: document.getElementById("customLon"),
  hiddenNote: document.getElementById("hiddenNote"),
  tweakPhash: document.getElementById("tweakPhash"),
  microResample: document.getElementById("microResample"),
  randomizeMetadata: document.getElementById("randomizeMetadata"),
  randomExtraExif: document.getElementById("randomExtraExif"),
  randomTimestamp: document.getElementById("randomTimestamp"),
  stripExif: document.getElementById("stripExif"),
  randomizeFileName: document.getElementById("randomizeFileName"),
  outputFormat: document.getElementById("outputFormat"),
  quality: document.getElementById("quality"),
  qualityValue: document.getElementById("qualityValue"),
  fileCount: document.getElementById("fileCount"),
  submitBtn: document.getElementById("submitBtn"),
  downloadAllBtn: document.getElementById("downloadAllBtn"),
  downloadSingleBtn: document.getElementById("downloadSingleBtn"),
  presetHint: document.getElementById("presetHint"),
  resetSettingsBtn: document.getElementById("resetSettingsBtn"),
  presetButtons: Array.from(document.querySelectorAll("[data-preset]")),
  sourceInsights: document.getElementById("sourceInsights"),
  sourceStatus: document.getElementById("sourceStatus"),
  results: document.getElementById("results"),
  progressText: document.getElementById("progressText"),
  progressBar: document.getElementById("progressBar"),
  runtimeStatus: document.getElementById("runtimeStatus"),
  globalMessage: document.getElementById("globalMessage"),
  metadataEditor: document.getElementById("metadataEditor"),
  metadataEditorBody: document.getElementById("metadataEditorBody"),
  metadataEditorSummary: document.getElementById("metadataEditorSummary"),
  metadataSearch: document.getElementById("metadataSearch"),
};

let sourceAuditItems = [];
let processedItems = [];
let isBusy = false;
let activePreset = "balanced";
let metadataEditorContext = null;

const cosTable = Array.from({ length: 32 }, (_, x) =>
  Array.from({ length: 32 }, (_, u) => Math.cos(((2 * x + 1) * u * Math.PI) / 64))
);

function populateSelect(select, values, defaultValue) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    option.selected = value === defaultValue;
    select.append(option);
  });
}

function setGlobalMessage(message, kind = "soft") {
  dom.globalMessage.hidden = !message;
  dom.globalMessage.textContent = message;
  dom.globalMessage.className = kind === "error" ? "notice notice-error" : "notice notice-soft";
}

function updateQualityLabel() {
  dom.qualityValue.textContent = dom.quality.value;
}

function collectPersistableSettings() {
  return {
    gpsName: dom.gpsName.value,
    deviceName: dom.deviceName.value,
    customLat: dom.customLat.value,
    customLon: dom.customLon.value,
    hiddenNote: dom.hiddenNote.value,
    tweakPhash: dom.tweakPhash.checked,
    microResample: dom.microResample.checked,
    randomizeMetadata: dom.randomizeMetadata.checked,
    randomExtraExif: dom.randomExtraExif.checked,
    randomTimestamp: dom.randomTimestamp.checked,
    stripExif: dom.stripExif.checked,
    randomizeFileName: dom.randomizeFileName.checked,
    outputFormat: dom.outputFormat.value,
    quality: dom.quality.value,
    activePreset,
  };
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(collectPersistableSettings()));
  } catch (error) {
    console.warn("保存设置失败", error);
  }
}

function applySavedSettings(settings) {
  if (!settings) {
    return;
  }

  dom.gpsName.value = settings.gpsName || dom.gpsName.value;
  dom.deviceName.value = settings.deviceName || dom.deviceName.value;
  dom.customLat.value = settings.customLat || "";
  dom.customLon.value = settings.customLon || "";
  dom.hiddenNote.value = settings.hiddenNote || "";
  dom.tweakPhash.checked = settings.tweakPhash ?? dom.tweakPhash.checked;
  dom.microResample.checked = settings.microResample ?? dom.microResample.checked;
  dom.randomizeMetadata.checked = settings.randomizeMetadata ?? dom.randomizeMetadata.checked;
  dom.randomExtraExif.checked = settings.randomExtraExif ?? dom.randomExtraExif.checked;
  dom.randomTimestamp.checked = settings.randomTimestamp ?? dom.randomTimestamp.checked;
  dom.stripExif.checked = settings.stripExif ?? dom.stripExif.checked;
  dom.randomizeFileName.checked = settings.randomizeFileName ?? dom.randomizeFileName.checked;
  dom.outputFormat.value = settings.outputFormat || dom.outputFormat.value;
  dom.quality.value = String(clamp(Number(settings.quality || dom.quality.value), 50, 100));
  updateQualityLabel();
}

function renderPresetState(presetName) {
  activePreset = presetName || "custom";
  dom.presetButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.preset === presetName);
  });

  if (!dom.presetHint) {
    return;
  }

  if (presetName && PRESET_CONFIGS[presetName]) {
    dom.presetHint.textContent = PRESET_CONFIGS[presetName].description;
    return;
  }

  dom.presetHint.textContent = "当前是自定义组合。网站会自动记住这套设置，下一次打开可以直接接着用。";
}

function applyPreset(presetName, options = {}) {
  const preset = PRESET_CONFIGS[presetName];
  if (!preset) {
    return;
  }

  const { persist = true } = options;
  const { values } = preset;

  if (values.gpsName) {
    dom.gpsName.value = values.gpsName;
  }
  if (values.deviceName) {
    dom.deviceName.value = values.deviceName;
  }
  if (Object.prototype.hasOwnProperty.call(values, "customLat")) {
    dom.customLat.value = values.customLat;
  }
  if (Object.prototype.hasOwnProperty.call(values, "customLon")) {
    dom.customLon.value = values.customLon;
  }
  if (Object.prototype.hasOwnProperty.call(values, "hiddenNote")) {
    dom.hiddenNote.value = values.hiddenNote;
  }

  dom.tweakPhash.checked = values.tweakPhash;
  dom.microResample.checked = values.microResample;
  dom.randomizeMetadata.checked = values.randomizeMetadata;
  dom.randomExtraExif.checked = values.randomExtraExif;
  dom.randomTimestamp.checked = values.randomTimestamp;
  dom.stripExif.checked = values.stripExif;
  dom.randomizeFileName.checked = values.randomizeFileName;
  dom.outputFormat.value = values.outputFormat;
  dom.quality.value = String(values.quality);
  updateQualityLabel();
  renderPresetState(presetName);

  if (persist) {
    saveSettings();
  }
}

function restoreSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) {
      renderPresetState("balanced");
      return;
    }

    const parsed = JSON.parse(raw);
    applySavedSettings(parsed);
    renderPresetState(parsed.activePreset && PRESET_CONFIGS[parsed.activePreset] ? parsed.activePreset : null);
  } catch (error) {
    console.warn("读取设置失败", error);
    renderPresetState("balanced");
  }
}

function resetSettings() {
  dom.customLat.value = "";
  dom.customLon.value = "";
  dom.hiddenNote.value = "";
  dom.gpsName.value = "中国·北京";
  dom.deviceName.value = "Apple iPhone 15 Pro";
  applyPreset("balanced", { persist: false });
  saveSettings();
  setGlobalMessage("已恢复为默认的平衡模式。");
}

function setFilesFromList(fileList) {
  if (!fileList?.length) {
    return;
  }

  const transfer = new DataTransfer();
  Array.from(fileList).forEach((file) => transfer.items.add(file));
  dom.images.files = transfer.files;
  updateFileCount();
  void scanSelectedFiles();
}

function bindDropZone() {
  if (!dom.dropZone) {
    return;
  }

  const setDragState = (active) => {
    dom.dropZone.classList.toggle("is-dragover", active);
  };

  ["dragenter", "dragover"].forEach((eventName) => {
    dom.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      setDragState(true);
    });
  });

  ["dragleave", "dragend"].forEach((eventName) => {
    dom.dropZone.addEventListener(eventName, () => setDragState(false));
  });

  dom.dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    setDragState(false);
    if (event.dataTransfer?.files?.length) {
      setFilesFromList(event.dataTransfer.files);
    }
  });
}

function setProgress(current, total, label) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;
  dom.progressBar.style.width = `${percent}%`;
  dom.progressText.textContent = label || `${percent}%`;
}

function setBusy(busy) {
  isBusy = busy;
  dom.submitBtn.disabled = busy;
  dom.downloadAllBtn.disabled = busy || processedItems.length === 0;
  dom.downloadSingleBtn.disabled = busy || processedItems.length !== 1;
  dom.downloadSingleBtn.hidden = processedItems.length !== 1;
  dom.runtimeStatus.textContent = busy ? "浏览器正在处理图片" : "浏览器模式已就绪";
  dom.runtimeStatus.className = `status-pill ${busy ? "status-warn" : "status-ok"}`;
}

function updateFileCount() {
  const count = dom.images.files.length;
  dom.fileCount.textContent = count ? `已选择 ${count} 个文件，浏览器会直接本地处理` : "还没有选择文件";
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomHex(bytes = 8) {
  const array = new Uint8Array(bytes);
  crypto.getRandomValues(array);
  return Array.from(array, (item) => item.toString(16).padStart(2, "0")).join("");
}

function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((item) => item.toString(16).padStart(2, "0"))
    .join("");
}

async function sha256Hex(input) {
  const digest = await crypto.subtle.digest("SHA-256", input);
  return bufferToHex(digest);
}

function buildOutputName(name, outputFormat) {
  const dot = name.lastIndexOf(".");
  const stem = dot >= 0 ? name.slice(0, dot) : name;
  return `${stem}_privacy${OUTPUT_EXT[outputFormat]}`;
}

function buildOutputNameWithOptions(name, outputFormat, options) {
  const dot = name.lastIndexOf(".");
  const stem = dot >= 0 ? name.slice(0, dot) : name;
  const randomSuffix = options.randomizeFileName ? `_${randomHex(3)}` : "";
  return `${stem}_privacy${randomSuffix}${OUTPUT_EXT[outputFormat]}`;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("Failed to read blob"));
    reader.readAsDataURL(blob);
  });
}

function dataUrlToBlob(dataUrl) {
  const [prefix, data] = dataUrl.split(",");
  const mime = /data:(.*?);base64/.exec(prefix)?.[1] || "application/octet-stream";
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: mime });
}

function canvasToBlob(canvas, outputFormat, quality) {
  const mime = OUTPUT_MIME[outputFormat];
  const encoderQuality = quality / 100;
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("浏览器未能导出图片。"));
          return;
        }
        resolve(blob);
      },
      mime,
      outputFormat === "PNG" ? undefined : encoderQuality
    );
  });
}

function sniffImageFormat(arrayBuffer, fallbackType = "", fallbackName = "") {
  const bytes = new Uint8Array(arrayBuffer.slice(0, 16));
  const ascii = Array.from(bytes, (value) => String.fromCharCode(value)).join("");
  const fallbackExt = fallbackName.includes(".") ? fallbackName.split(".").pop().toLowerCase() : "";

  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return { label: "PNG", mime: "image/png", outputFormat: "PNG", browserNative: true };
  }

  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { label: "JPEG", mime: "image/jpeg", outputFormat: "JPEG", browserNative: true };
  }

  if (ascii.startsWith("RIFF") && ascii.slice(8, 12) === "WEBP") {
    return { label: "WEBP", mime: "image/webp", outputFormat: "WEBP", browserNative: true };
  }

  if (
    (bytes.length >= 4 && bytes[0] === 0x49 && bytes[1] === 0x49 && bytes[2] === 0x2a && bytes[3] === 0x00) ||
    (bytes.length >= 4 && bytes[0] === 0x4d && bytes[1] === 0x4d && bytes[2] === 0x00 && bytes[3] === 0x2a)
  ) {
    return { label: "TIFF", mime: "image/tiff", outputFormat: "PNG", browserNative: false };
  }

  if (ascii.startsWith("GIF8")) {
    return { label: "GIF", mime: "image/gif", outputFormat: "PNG", browserNative: true };
  }

  if (bytes.length >= 2 && bytes[0] === 0x42 && bytes[1] === 0x4d) {
    return { label: "BMP", mime: "image/bmp", outputFormat: "PNG", browserNative: true };
  }

  if (ascii.includes("ftyp")) {
    const brand = ascii.slice(8, 12).toLowerCase();
    if (["heic", "heix", "hevc", "hevx", "mif1", "msf1"].includes(brand)) {
      return { label: "HEIF/HEIC", mime: "image/heif", outputFormat: "PNG", browserNative: false };
    }
    if (brand === "avif") {
      return { label: "AVIF", mime: "image/avif", outputFormat: "PNG", browserNative: true };
    }
  }

  if (fallbackType) {
    if (fallbackType.includes("jpeg")) {
      return { label: "JPEG", mime: "image/jpeg", outputFormat: "JPEG", browserNative: true };
    }
    if (fallbackType.includes("heic") || fallbackType.includes("heif")) {
      return { label: "HEIF/HEIC", mime: fallbackType.includes("heic") ? "image/heic" : "image/heif", outputFormat: "PNG", browserNative: false };
    }
    if (fallbackType.includes("png")) {
      return { label: "PNG", mime: "image/png", outputFormat: "PNG", browserNative: true };
    }
    if (fallbackType.includes("webp")) {
      return { label: "WEBP", mime: "image/webp", outputFormat: "WEBP", browserNative: true };
    }
  }

  if (fallbackExt === "jpg" || fallbackExt === "jpeg") {
    return { label: "JPEG", mime: "image/jpeg", outputFormat: "JPEG", browserNative: true };
  }
  if (fallbackExt === "png") {
    return { label: "PNG", mime: "image/png", outputFormat: "PNG", browserNative: true };
  }
  if (fallbackExt === "webp") {
    return { label: "WEBP", mime: "image/webp", outputFormat: "WEBP", browserNative: true };
  }
  if (fallbackExt === "tif" || fallbackExt === "tiff") {
    return { label: "TIFF", mime: "image/tiff", outputFormat: "PNG", browserNative: false };
  }
  if (fallbackExt === "heic" || fallbackExt === "heif") {
    return { label: "HEIF/HEIC", mime: fallbackExt === "heic" ? "image/heic" : "image/heif", outputFormat: "PNG", browserNative: false };
  }

  return {
    label: fallbackType || fallbackExt || "Unknown",
    mime: fallbackType || "image/*",
    outputFormat: "PNG",
    browserNative: true,
  };
}

function formatSourceMimeLabel(sourceFormat, file, overrides = {}) {
  const detectedLabel = overrides.label || sourceFormat.label;
  const detectedMime = overrides.mime || sourceFormat.mime;
  const claimedType = file.type || "";
  const claimedExt = file.name.includes(".") ? file.name.split(".").pop().toLowerCase() : "";
  const expectedExts =
    detectedLabel === "JPEG"
      ? ["jpg", "jpeg"]
      : detectedLabel === "TIFF"
        ? ["tif", "tiff"]
        : detectedLabel === "HEIF/HEIC"
          ? ["heic", "heif"]
        : detectedLabel === "DNG"
          ? ["dng"]
          : [detectedLabel.toLowerCase()];
  const isMismatch =
    (claimedType && claimedType !== detectedMime) ||
    (claimedExt && !expectedExts.includes(claimedExt));

  return isMismatch
    ? `${detectedMime} (文件实际为 ${detectedLabel}，扩展名/类型可能伪装)`
    : detectedMime;
}

async function decodeTiffToCanvas(arrayBuffer) {
  if (typeof UTIF === "undefined") {
    throw new Error("检测到 TIFF 文件，但当前页面还没加载 TIFF 解码器。请刷新后重试。");
  }

  const ifds = UTIF.decode(arrayBuffer);
  if (!ifds.length) {
    throw new Error("这张 TIFF 图片无法解析。");
  }

  const ifd = ifds[0];
  UTIF.decodeImage(arrayBuffer, ifd);
  const rgba = UTIF.toRGBA8(ifd);
  const canvas = document.createElement("canvas");
  canvas.width = ifd.width;
  canvas.height = ifd.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const imageData = new ImageData(new Uint8ClampedArray(rgba), ifd.width, ifd.height);
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

async function tryDecodeImageBlobToCanvas(blob) {
  if (typeof createImageBitmap === "function") {
    try {
      const bitmap = await createImageBitmap(blob);
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      canvas.getContext("2d", { willReadFrequently: true }).drawImage(bitmap, 0, 0);
      if (bitmap.close) {
        bitmap.close();
      }
      return canvas;
    } catch (error) {
      // Some browsers reject HEIC in createImageBitmap while still supporting <img>.
    }
  }

  const objectUrl = URL.createObjectURL(blob);
  try {
    const img = document.createElement("img");
    img.decoding = "async";
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = () => reject(new Error("native image decode failed"));
      img.src = objectUrl;
    });
    if (!img.naturalWidth || !img.naturalHeight) {
      throw new Error("decoded image has no dimensions");
    }
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    canvas.getContext("2d", { willReadFrequently: true }).drawImage(img, 0, 0);
    return canvas;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

async function decodeHeicToCanvas(blob) {
  const typedBlob =
    blob.type && /hei[cf]/i.test(blob.type)
      ? blob
      : new Blob([blob], { type: blob.name?.toLowerCase().endsWith(".heif") ? "image/heif" : "image/heic" });

  try {
    return await withTimeout(
      tryDecodeImageBlobToCanvas(typedBlob),
      2500,
      "Native HEIC decode timed out; falling back to bundled decoder."
    );
  } catch (nativeError) {
    // Fall back to the bundled WASM decoder below.
  }

  if (typeof HeicTo === "function") {
    try {
      const outputBlob = await withTimeout(
        HeicTo({
          blob: typedBlob,
          type: "image/jpeg",
          quality: 0.92,
        }),
        60000,
        "HEIC/HEIF bundled decoder timed out."
      );
      if (!(outputBlob instanceof Blob)) {
        throw new Error("HEIC/HEIF 转换失败，浏览器没有返回可用的图像数据。");
      }
      return tryDecodeImageBlobToCanvas(outputBlob);
    } catch (error) {
      console.warn("heic-to decode failed, falling back to heic2any", error);
    }
  }

  if (typeof heic2any === "undefined") {
    throw new Error("检测到 HEIC/HEIF 文件，但当前页面还没加载 HEIC 解码器。请确认已使用新版 Workers 静态站点，或刷新后重试。");
  }

  try {
    const converted = await withTimeout(
      heic2any({
        blob: typedBlob,
        toType: "image/jpeg",
        quality: 0.92,
      }),
      60000,
      "HEIC/HEIF fallback decoder timed out."
    );
    const outputBlob = Array.isArray(converted) ? converted[0] : converted;
    if (!(outputBlob instanceof Blob)) {
      throw new Error("HEIC/HEIF 转换失败，浏览器没有返回可用的图像数据。");
    }

    return tryDecodeImageBlobToCanvas(outputBlob);
  } catch (error) {
    throw new Error(
      `HEIC/HEIF 解码失败：${error.message || "当前浏览器不支持这个 HEIC 变体"}。如果是在手机上，请先试一张较小的 HEIC，或在系统分享菜单里选择“存储为 JPEG”后再处理。`
    );
  }
}

async function createPreviewUrlFromCanvas(canvas) {
  const maxEdge = 640;
  const scale = Math.min(1, maxEdge / Math.max(canvas.width, canvas.height));
  const previewCanvas = document.createElement("canvas");
  previewCanvas.width = Math.max(1, Math.round(canvas.width * scale));
  previewCanvas.height = Math.max(1, Math.round(canvas.height * scale));
  const ctx = previewCanvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(canvas, 0, 0, previewCanvas.width, previewCanvas.height);
  const blob = await canvasToBlob(previewCanvas, "JPEG", 82);
  return URL.createObjectURL(blob);
}

async function loadBitmap(fileOrBlob, arrayBuffer = null, sourceFormat = null) {
  const format = sourceFormat || sniffImageFormat(arrayBuffer || (await fileOrBlob.arrayBuffer()), fileOrBlob.type, fileOrBlob.name || "");

  if (format.label === "TIFF") {
    return decodeTiffToCanvas(arrayBuffer || (await fileOrBlob.arrayBuffer()));
  }

  if (format.label === "HEIF/HEIC") {
    return decodeHeicToCanvas(fileOrBlob);
  }

  try {
    return await tryDecodeImageBlobToCanvas(fileOrBlob);
  } catch (error) {
    throw new Error(`浏览器无法解码这张 ${format.label} 图片。`);
  }
}

async function imageFromBlob(blob) {
  const bitmap = await loadBitmap(blob);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(bitmap, 0, 0);
  if (bitmap.close) {
    bitmap.close();
  }
  return canvas;
}

function cloneCanvas(canvas) {
  const copy = document.createElement("canvas");
  copy.width = canvas.width;
  copy.height = canvas.height;
  copy.getContext("2d", { willReadFrequently: true }).drawImage(canvas, 0, 0);
  return copy;
}

function renderSourceToCanvas(bitmap, outputFormat) {
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (outputFormat === "JPEG") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(bitmap, 0, 0);
  return canvas;
}

function applyMicroResample(canvas, outputFormat) {
  const source = cloneCanvas(canvas);
  const tweaked = document.createElement("canvas");
  tweaked.width = canvas.width;
  tweaked.height = canvas.height;
  const ctx = tweaked.getContext("2d", { willReadFrequently: true });

  if (outputFormat === "JPEG") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, tweaked.width, tweaked.height);
  }

  const scale = 1.004 + Math.random() * 0.008;
  const maxShiftX = Math.min(tweaked.width * 0.004, 2.5);
  const maxShiftY = Math.min(tweaked.height * 0.004, 2.5);
  const width = tweaked.width * scale;
  const height = tweaked.height * scale;
  const shiftX = (Math.random() - 0.5) * maxShiftX * 2;
  const shiftY = (Math.random() - 0.5) * maxShiftY * 2;
  const dx = (tweaked.width - width) / 2 + shiftX;
  const dy = (tweaked.height - height) / 2 + shiftY;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(source, 0, 0, source.width, source.height, dx, dy, width, height);
  return tweaked;
}

function alphaCoefficient(index) {
  return index === 0 ? 1 / Math.sqrt(2) : 1;
}

function computePHash(canvas) {
  const sample = document.createElement("canvas");
  sample.width = 32;
  sample.height = 32;
  const sampleCtx = sample.getContext("2d", { willReadFrequently: true });
  sampleCtx.drawImage(canvas, 0, 0, 32, 32);
  const pixels = sampleCtx.getImageData(0, 0, 32, 32).data;
  const grayscale = Array.from({ length: 32 }, () => Array(32).fill(0));

  for (let y = 0; y < 32; y += 1) {
    for (let x = 0; x < 32; x += 1) {
      const offset = (y * 32 + x) * 4;
      grayscale[y][x] = 0.299 * pixels[offset] + 0.587 * pixels[offset + 1] + 0.114 * pixels[offset + 2];
    }
  }

  const dct = Array.from({ length: 8 }, () => Array(8).fill(0));
  for (let u = 0; u < 8; u += 1) {
    for (let v = 0; v < 8; v += 1) {
      let sum = 0;
      for (let y = 0; y < 32; y += 1) {
        for (let x = 0; x < 32; x += 1) {
          sum += grayscale[y][x] * cosTable[x][u] * cosTable[y][v];
        }
      }
      dct[u][v] = 0.25 * alphaCoefficient(u) * alphaCoefficient(v) * sum;
    }
  }

  const values = [];
  for (let u = 0; u < 8; u += 1) {
    for (let v = 0; v < 8; v += 1) {
      if (u !== 0 || v !== 0) {
        values.push(dct[u][v]);
      }
    }
  }

  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const bits = [];
  for (let u = 0; u < 8; u += 1) {
    for (let v = 0; v < 8; v += 1) {
      bits.push(dct[u][v] > average ? "1" : "0");
    }
  }

  let hex = "";
  for (let index = 0; index < bits.length; index += 4) {
    const chunk = bits.slice(index, index + 4).join("");
    hex += parseInt(chunk, 2).toString(16);
  }
  return hex;
}

function applyVisualTweak(canvas, delta, patchRadius, patchCount) {
  const tweaked = cloneCanvas(canvas);
  const ctx = tweaked.getContext("2d", { willReadFrequently: true });
  const imageData = ctx.getImageData(0, 0, tweaked.width, tweaked.height);
  const { data } = imageData;

  for (let i = 0; i < Math.max(1, patchCount); i += 1) {
    const centerX = Math.floor(Math.random() * tweaked.width);
    const centerY = Math.floor(Math.random() * tweaked.height);
    const xStart = Math.max(0, centerX - patchRadius);
    const xEnd = Math.min(tweaked.width, centerX + patchRadius + 1);
    const yStart = Math.max(0, centerY - patchRadius);
    const yEnd = Math.min(tweaked.height, centerY + patchRadius + 1);

    for (let y = yStart; y < yEnd; y += 1) {
      for (let x = xStart; x < xEnd; x += 1) {
        const offset = (y * tweaked.width + x) * 4;
        const channel = Math.floor(Math.random() * 3);
        const direction = Math.random() > 0.5 ? 1 : -1;
        data[offset + channel] = clamp(data[offset + channel] + direction * delta, 0, 255);
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return tweaked;
}

function applyLowFrequencyTweak(canvas, delta, mode) {
  const tweaked = cloneCanvas(canvas);
  const ctx = tweaked.getContext("2d", { willReadFrequently: true });
  const imageData = ctx.getImageData(0, 0, tweaked.width, tweaked.height);
  const { data } = imageData;
  const widthDenominator = Math.max(1, tweaked.width - 1);
  const heightDenominator = Math.max(1, tweaked.height - 1);

  for (let y = 0; y < tweaked.height; y += 1) {
    const yRatio = y / heightDenominator;
    for (let x = 0; x < tweaked.width; x += 1) {
      const xRatio = x / widthDenominator;
      const offset = (y * tweaked.width + x) * 4;
      let adjustment = 0;

      if (mode === "gradient-x") {
        adjustment = Math.round(((xRatio - 0.5) * 2) * delta);
      } else if (mode === "gradient-y") {
        adjustment = Math.round(((yRatio - 0.5) * 2) * delta);
      } else if (mode === "quadrants") {
        adjustment = (xRatio < 0.5) === (yRatio < 0.5) ? delta : -delta;
      } else if (mode === "bands") {
        const bandX = Math.min(3, Math.floor(xRatio * 4));
        const bandY = Math.min(3, Math.floor(yRatio * 4));
        adjustment = (bandX + bandY) % 2 === 0 ? delta : -delta;
      }

      data[offset] = clamp(data[offset] + adjustment, 0, 255);
      data[offset + 1] = clamp(data[offset + 1] + adjustment, 0, 255);
      data[offset + 2] = clamp(data[offset + 2] + adjustment, 0, 255);
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return tweaked;
}

function phashHammingDistance(left, right) {
  if (!left || !right || left.length !== right.length) {
    return left === right ? 0 : Number.MAX_SAFE_INTEGER;
  }

  let distance = 0;
  for (let index = 0; index < left.length; index += 1) {
    let value = parseInt(left[index], 16) ^ parseInt(right[index], 16);
    while (value > 0) {
      distance += value & 1;
      value >>= 1;
    }
  }
  return distance;
}

async function renderOutputCandidate(canvas, options) {
  const outputBlob = await canvasToBlob(canvas, options.effectiveOutputFormat, options.quality);
  const outputCanvas = await imageFromBlob(outputBlob);
  return {
    outputBlob,
    dstPHash: computePHash(outputCanvas),
  };
}

async function findBestPhashVariant(sourceCanvas, srcPHash, options) {
  const baselineCanvas = cloneCanvas(sourceCanvas);
  const baselineOutput = await renderOutputCandidate(baselineCanvas, options);
  let best = {
    workingCanvas: baselineCanvas,
    outputBlob: baselineOutput.outputBlob,
    dstPHash: baselineOutput.dstPHash,
    tweakLabel: "仅编码输出",
    tweakDistance: phashHammingDistance(srcPHash, baselineOutput.dstPHash),
  };

  if (!options.tweakPhash || best.tweakDistance > 0) {
    return {
      ...best,
      phashExhausted: false,
    };
  }

  const attempts = [
    { kind: "patch", label: "随机扰动 1", delta: 1, patchRadius: 0, patchCount: 1 },
    { kind: "patch", label: "随机扰动 2", delta: 2, patchRadius: 1, patchCount: 1 },
    { kind: "patch", label: "随机扰动 4", delta: 4, patchRadius: 2, patchCount: 2 },
    { kind: "pattern", label: "低频横向梯度", delta: 6, mode: "gradient-x" },
    { kind: "pattern", label: "低频纵向梯度", delta: 6, mode: "gradient-y" },
    { kind: "pattern", label: "低频四象限", delta: 8, mode: "quadrants" },
    { kind: "pattern", label: "低频网格", delta: 10, mode: "bands" },
    { kind: "patch", label: "随机扰动 8", delta: 8, patchRadius: 4, patchCount: 4 },
    { kind: "pattern", label: "强化四象限", delta: 14, mode: "quadrants" },
    { kind: "pattern", label: "强化低频网格", delta: 18, mode: "bands" },
    { kind: "patch", label: "强随机扰动", delta: 18, patchRadius: 7, patchCount: 8 },
  ];

  for (const attempt of attempts) {
    const workingCanvas =
      attempt.kind === "patch"
        ? applyVisualTweak(sourceCanvas, attempt.delta, attempt.patchRadius, attempt.patchCount)
        : applyLowFrequencyTweak(sourceCanvas, attempt.delta, attempt.mode);
    const candidate = await renderOutputCandidate(workingCanvas, options);
    const tweakDistance = phashHammingDistance(srcPHash, candidate.dstPHash);

    if (tweakDistance > best.tweakDistance) {
      best = {
        workingCanvas,
        outputBlob: candidate.outputBlob,
        dstPHash: candidate.dstPHash,
        tweakLabel: attempt.label,
        tweakDistance,
      };
    }

    if (tweakDistance > 0) {
      return {
        ...best,
        phashExhausted: false,
      };
    }
  }

  return {
    ...best,
    phashExhausted: true,
  };
}

function metersToLatitudeOffset(meters) {
  return meters / 111320;
}

function metersToLongitudeOffset(meters, latitude) {
  const safeCos = Math.max(Math.cos((latitude * Math.PI) / 180), 0.1);
  return meters / (111320 * safeCos);
}

function formatCoordinate(value) {
  return value.toFixed(6);
}

function createPreciseCoordinates(customLat, customLon, gpsName) {
  if (customLat !== "" && customLon !== "") {
    const latitude = Number(customLat);
    const longitude = Number(customLon);
    return {
      latitude,
      longitude,
      label: "自定义坐标",
      jitterMeters: 0,
    };
  }

  const preset = GPS_PRESETS[gpsName];
  if (!preset) {
    return null;
  }

  const [baseLat, baseLon] = preset;
  const distanceMeters =
    PRESET_MIN_JITTER_METERS +
    Math.random() * (PRESET_MAX_JITTER_METERS - PRESET_MIN_JITTER_METERS);
  const bearing = Math.random() * Math.PI * 2;
  const latOffset = metersToLatitudeOffset(Math.cos(bearing) * distanceMeters);
  const lonOffset = metersToLongitudeOffset(Math.sin(bearing) * distanceMeters, baseLat);

  return {
    latitude: baseLat + latOffset,
    longitude: baseLon + lonOffset,
    label: gpsName,
    jitterMeters: distanceMeters,
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatExifDate(date) {
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
  ].join(":") + " " + [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())].join(":");
}

function formatExifDateStamp(date) {
  return [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join(":");
}

function decimalToRational(value, denominator = 100) {
  return [Math.round(value * denominator), denominator];
}

function buildGpsTimeStamp(date) {
  return [
    [date.getHours(), 1],
    [date.getMinutes(), 1],
    [date.getSeconds(), 1],
  ];
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) {
    return "未知大小";
  }

  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function withTimeout(promise, timeoutMs, message) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error(message)), timeoutMs);
  });

  return Promise.race([promise, timeout]).finally(() => {
    window.clearTimeout(timeoutId);
  });
}

function rationalToNumber(value) {
  if (Array.isArray(value)) {
    const [numerator, denominator] = value;
    return Number(denominator) ? Number(numerator) / Number(denominator) : 0;
  }
  return Number(value) || 0;
}

function dmsArrayToDecimal(ref, value) {
  if (!Array.isArray(value) || value.length < 3) {
    return null;
  }

  const degrees = rationalToNumber(value[0]);
  const minutes = rationalToNumber(value[1]);
  const seconds = rationalToNumber(value[2]);
  let decimal = degrees + minutes / 60 + seconds / 3600;
  if (ref === "S" || ref === "W") {
    decimal *= -1;
  }
  return decimal;
}

function normalizeExifText(value) {
  if (value == null) {
    return "";
  }
  return String(value).replace(/\0/g, "").trim();
}

function formatResolutionTag(value, unit) {
  if (!value) {
    return "";
  }

  const resolution = Array.isArray(value) ? rationalToNumber(value) : Number(value);
  if (!Number.isFinite(resolution) || resolution <= 0) {
    return "";
  }

  const unitLabel = unit === 3 ? "dpcm" : "dpi";
  return `${resolution.toFixed(0)} ${unitLabel}`;
}

function formatExifVersion(value) {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return String(value);
  }

  return Array.from(value)
    .map((item) => String.fromCharCode(item))
    .join("")
    .replace(/\0/g, "");
}

function formatColorSpace(value) {
  if (value === 1) {
    return "sRGB";
  }
  if (value === 65535) {
    return "Uncalibrated";
  }
  return value == null ? "" : String(value);
}

function getExifTagName(section, tagId) {
  return piexif?.TAGS?.[section]?.[tagId]?.name || `Tag ${tagId}`;
}

function summarizeDetectedExif(exif) {
  const sections = [
    ["0th", exif["0th"] || {}],
    ["Exif", exif.Exif || {}],
    ["GPS", exif.GPS || {}],
    ["Interop", exif.Interop || {}],
    ["1st", exif["1st"] || {}],
  ];

  const summary = sections
    .map(([name, entries]) => `${name}:${Object.keys(entries).length}`)
    .join(" / ");

  const labels = sections
    .flatMap(([sectionName, entries]) =>
      Object.keys(entries)
        .slice(0, 12)
        .map((key) => getExifTagName(sectionName, Number(key)))
    )
    .filter(Boolean)
    .map((label) => localizeLooseMetadataLabel(label));

  return {
    exifSectionSummary: summary,
    rawTagLabels: Array.from(new Set(labels)),
  };
}

function findByteSequence(bytes, marker, startIndex = 0) {
  outer: for (let index = startIndex; index <= bytes.length - marker.length; index += 1) {
    for (let offset = 0; offset < marker.length; offset += 1) {
      if (bytes[index + offset] !== marker[offset]) {
        continue outer;
      }
    }
    return index;
  }
  return -1;
}

function extractXmpPacket(arrayBuffer) {
  if (!arrayBuffer) {
    return "";
  }

  const bytes = new Uint8Array(arrayBuffer);
  const encoder = new TextEncoder();
  const startMarker = encoder.encode("<x:xmpmeta");
  const endMarker = encoder.encode("</x:xmpmeta>");
  const start = findByteSequence(bytes, startMarker);
  if (start === -1) {
    return "";
  }

  const endStart = findByteSequence(bytes, endMarker, start);
  if (endStart === -1) {
    return "";
  }

  return new TextDecoder("utf-8", { fatal: false }).decode(bytes.slice(start, endStart + endMarker.length)).trim();
}

function readFirstXmlTag(document, tagNames) {
  for (const tagName of tagNames) {
    const node = document.getElementsByTagName(tagName)[0];
    const value = node?.textContent?.trim();
    if (value) {
      return value;
    }
  }
  return "";
}

function summarizeDetectedXmp(xmpText) {
  if (!xmpText || typeof DOMParser === "undefined") {
    return {
      hasXmp: false,
      xmpDevice: "",
      xmpLens: "",
      xmpTime: "",
      xmpGps: "",
      xmpSummary: "",
      xmpTags: [],
    };
  }

  try {
    const document = new DOMParser().parseFromString(xmpText, "text/xml");
    if (document.getElementsByTagName("parsererror").length) {
      return {
        hasXmp: false,
        xmpDevice: "",
        xmpLens: "",
        xmpTime: "",
        xmpGps: "",
        xmpSummary: "",
        xmpTags: [],
      };
    }

    const make = readFirstXmlTag(document, ["tiff:Make", "exif:Make"]);
    const model = readFirstXmlTag(document, ["tiff:Model", "exif:Model"]);
    const lens = readFirstXmlTag(document, ["aux:Lens", "aux:LensInfo", "exifEX:LensModel"]);
    const time = readFirstXmlTag(document, [
      "photoshop:DateCreated",
      "xmp:CreateDate",
      "exif:DateTimeOriginal",
      "xmp:ModifyDate",
    ]);
    const gpsLatitude = readFirstXmlTag(document, ["exif:GPSLatitude"]);
    const gpsLongitude = readFirstXmlTag(document, ["exif:GPSLongitude"]);
    const tagNames = Array.from(document.getElementsByTagName("*"))
      .map((node) => node.tagName)
      .filter(Boolean)
      .filter((tagName) => !["x:xmpmeta", "rdf:RDF", "rdf:Description", "rdf:Alt", "rdf:li"].includes(tagName));

    return {
      hasXmp: true,
      xmpDevice: [make, model].filter(Boolean).join(" / "),
      xmpLens: lens,
      xmpTime: time,
      xmpGps: gpsLatitude && gpsLongitude ? `${gpsLatitude}, ${gpsLongitude}` : "",
      xmpSummary: `${Array.from(new Set(tagNames)).length} 项`,
      xmpTags: Array.from(new Set(tagNames))
        .map((tagName) => localizeLooseMetadataLabel(tagName))
        .slice(0, 16),
    };
  } catch (error) {
    return {
      hasXmp: false,
      xmpDevice: "",
      xmpLens: "",
      xmpTime: "",
      xmpGps: "",
      xmpSummary: "",
      xmpTags: [],
    };
  }
}

const TIFF_TAG_NAMES = {
  254: "NewSubfileType",
  256: "ImageWidth",
  257: "ImageLength",
  258: "BitsPerSample",
  259: "Compression",
  262: "PhotometricInterpretation",
  271: "Make",
  272: "Model",
  274: "Orientation",
  282: "XResolution",
  283: "YResolution",
  296: "ResolutionUnit",
  305: "Software",
  306: "DateTime",
  330: "SubIFDs",
  33434: "ExposureTime",
  33437: "FNumber",
  34665: "ExifOffset",
  34853: "GPSInfo",
  34855: "ISO",
  36864: "ExifVersion",
  36867: "DateTimeOriginal",
  36868: "DateTimeDigitized",
  36880: "OffsetTime",
  36881: "OffsetTimeOriginal",
  36882: "OffsetTimeDigitized",
  37377: "ShutterSpeedValue",
  37378: "ApertureValue",
  37386: "FocalLength",
  37521: "SubSecTimeOriginal",
  37522: "SubSecTimeDigitized",
  40961: "ColorSpace",
  40962: "ExifImageWidth",
  40963: "ExifImageHeight",
  41989: "FocalLengthIn35mmFilm",
  42035: "LensMake",
  42036: "LensModel",
  50706: "DNGVersion",
  50707: "DNGBackwardVersion",
  50708: "UniqueCameraModel",
  50936: "ProfileName",
};

const TIFF_GPS_TAG_NAMES = {
  1: "GPSLatitudeRef",
  2: "GPSLatitude",
  3: "GPSLongitudeRef",
  4: "GPSLongitude",
  5: "GPSAltitudeRef",
  6: "GPSAltitude",
  7: "GPSTimeStamp",
  12: "GPSSpeedRef",
  13: "GPSSpeed",
  16: "GPSImgDirectionRef",
  17: "GPSImgDirection",
  23: "GPSDestBearingRef",
  24: "GPSDestBearing",
  29: "GPSDateStamp",
  31: "GPSHPositioningError",
};

const TIFF_TYPE_SIZES = {
  1: 1,
  2: 1,
  3: 2,
  4: 4,
  5: 8,
  7: 1,
  9: 4,
  10: 8,
  11: 4,
  12: 8,
};

function getTiffTagName(tagId, section = "tiff") {
  return section === "gps" ? TIFF_GPS_TAG_NAMES[tagId] || `GPS Tag ${tagId}` : TIFF_TAG_NAMES[tagId] || `Tag ${tagId}`;
}

function looksLikeTiffBuffer(arrayBuffer) {
  if (!arrayBuffer || arrayBuffer.byteLength < 8) {
    return false;
  }

  const view = new DataView(arrayBuffer);
  const byteOrder = String.fromCharCode(view.getUint8(0), view.getUint8(1));
  return byteOrder === "II" || byteOrder === "MM";
}

function createTiffReader(view, littleEndian) {
  return {
    u16(offset) {
      return view.getUint16(offset, littleEndian);
    },
    u32(offset) {
      return view.getUint32(offset, littleEndian);
    },
    i32(offset) {
      return view.getInt32(offset, littleEndian);
    },
    f32(offset) {
      return view.getFloat32(offset, littleEndian);
    },
    f64(offset) {
      return view.getFloat64(offset, littleEndian);
    },
  };
}

function formatFractionalSeconds(value) {
  const normalized = normalizeExifText(value);
  return normalized ? normalized.replace(/[^0-9]/g, "") : "";
}

function formatSourceDateTimeValue(dateTime, subSec = "", offsetTime = "") {
  const normalized = normalizeExifText(dateTime);
  if (!normalized) {
    return "";
  }

  const ms = formatFractionalSeconds(subSec);
  const offset = normalizeExifText(offsetTime);
  return `${normalized}${ms ? `.${ms}` : ""}${offset ? ` ${offset}` : ""}`;
}

function formatNumericValue(value, digits = 1) {
  if (value == null || value === "") {
    return "";
  }

  const number = Number(value);
  if (!Number.isFinite(number)) {
    return "";
  }
  return number.toFixed(digits).replace(/\.0+$/, "");
}

function formatExposureTimeValue(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) {
    return "";
  }
  if (number >= 1) {
    return `${formatNumericValue(number, 2)} s`;
  }
  const denominator = Math.max(1, Math.round(1 / number));
  return `1/${denominator} s`;
}

function formatGpsTimeStampValue(value, dateStamp = "") {
  if (!Array.isArray(value) || value.length < 3) {
    return "";
  }

  const hours = Math.round(Number(value[0]) || 0);
  const minutes = Math.round(Number(value[1]) || 0);
  const seconds = Number(value[2]) || 0;
  const clock = `${pad(hours)}:${pad(minutes)}:${pad(Math.floor(seconds))}`;
  const normalizedDate = normalizeExifText(dateStamp);
  return normalizedDate ? `${normalizedDate} ${clock}Z` : clock;
}

function formatDngVersionValue(value) {
  if (Array.isArray(value)) {
    return value.join(".");
  }
  return normalizeExifText(value);
}

function readTiffSingleValue(view, reader, type, offset) {
  switch (type) {
    case 1:
    case 7:
      return view.getUint8(offset);
    case 3:
      return reader.u16(offset);
    case 4:
      return reader.u32(offset);
    case 5: {
      const numerator = reader.u32(offset);
      const denominator = reader.u32(offset + 4);
      return denominator ? numerator / denominator : 0;
    }
    case 9:
      return reader.i32(offset);
    case 10: {
      const numerator = reader.i32(offset);
      const denominator = reader.i32(offset + 4);
      return denominator ? numerator / denominator : 0;
    }
    case 11:
      return reader.f32(offset);
    case 12:
      return reader.f64(offset);
    default:
      return null;
  }
}

function readTiffEntryValue(view, reader, entryOffset, type, count) {
  const unitSize = TIFF_TYPE_SIZES[type];
  if (!unitSize || !count) {
    return null;
  }

  const totalSize = unitSize * count;
  const dataOffset = totalSize <= 4 ? entryOffset + 8 : reader.u32(entryOffset + 8);
  if (dataOffset < 0 || dataOffset + totalSize > view.byteLength) {
    return null;
  }

  if (type === 2) {
    const bytes = new Uint8Array(view.buffer, dataOffset, count);
    return new TextDecoder("utf-8", { fatal: false }).decode(bytes).replace(/\0+$/g, "").trim();
  }

  const values = [];
  for (let index = 0; index < count; index += 1) {
    const value = readTiffSingleValue(view, reader, type, dataOffset + index * unitSize);
    values.push(value);
  }
  return count === 1 ? values[0] : values;
}

function parseTiffIfd(view, reader, offset, visited) {
  if (!offset || offset < 0 || offset + 2 > view.byteLength || visited.has(offset)) {
    return { entries: {}, nextOffset: 0 };
  }

  visited.add(offset);
  const entryCount = reader.u16(offset);
  const entries = {};
  for (let index = 0; index < entryCount; index += 1) {
    const entryOffset = offset + 2 + index * 12;
    if (entryOffset + 12 > view.byteLength) {
      break;
    }

    const tag = reader.u16(entryOffset);
    const type = reader.u16(entryOffset + 2);
    const count = reader.u32(entryOffset + 4);
    const value = readTiffEntryValue(view, reader, entryOffset, type, count);
    if (value != null) {
      entries[tag] = value;
    }
  }

  const nextOffsetLocation = offset + 2 + entryCount * 12;
  const nextOffset = nextOffsetLocation + 4 <= view.byteLength ? reader.u32(nextOffsetLocation) : 0;
  return { entries, nextOffset };
}

function normalizeTiffOffsetList(value) {
  if (Array.isArray(value)) {
    return value.filter((item) => Number.isFinite(Number(item)) && Number(item) > 0).map((item) => Number(item));
  }
  if (Number.isFinite(Number(value)) && Number(value) > 0) {
    return [Number(value)];
  }
  return [];
}

function flattenTiffTagLabels(sectionName, entries) {
  return Object.keys(entries)
    .map((key) => getTiffTagName(Number(key), sectionName))
    .map((label) => localizeLooseMetadataLabel(label))
    .filter(Boolean);
}

function readSourceTiffData(arrayBuffer) {
  if (!looksLikeTiffBuffer(arrayBuffer)) {
    return {
      hasTiff: false,
      sourceContainerLabel: "",
      sourceMime: "",
      sourceTiffSummary: "",
      sourceTiffDateTime: "",
      sourceSoftware: "",
      sourceExifVersion: "",
      sourceColorSpace: "",
      sourceIso: "",
      sourceFNumber: "",
      sourceExposureTime: "",
      sourceFocalLength: "",
      sourceFocalLength35mm: "",
      sourceAltitude: "",
      sourceGpsTime: "",
      sourceDngVersion: "",
      sourceRawTags: [],
    };
  }

  try {
    const view = new DataView(arrayBuffer);
    const byteOrder = String.fromCharCode(view.getUint8(0), view.getUint8(1));
    const littleEndian = byteOrder === "II";
    const reader = createTiffReader(view, littleEndian);
    const magic = reader.u16(2);
    if (magic !== 42) {
      return {
        hasTiff: false,
        sourceContainerLabel: "",
        sourceMime: "",
        sourceTiffSummary: "",
        sourceTiffDateTime: "",
        sourceSoftware: "",
        sourceExifVersion: "",
        sourceColorSpace: "",
        sourceIso: "",
        sourceFNumber: "",
        sourceExposureTime: "",
        sourceFocalLength: "",
        sourceFocalLength35mm: "",
        sourceAltitude: "",
        sourceGpsTime: "",
        sourceDngVersion: "",
        sourceRawTags: [],
      };
    }

    const visited = new Set();
    const firstIfdOffset = reader.u32(4);
    const ifd0 = parseTiffIfd(view, reader, firstIfdOffset, visited);
    const exifIfd = parseTiffIfd(view, reader, Number(ifd0.entries[34665]) || 0, visited);
    const gpsIfd = parseTiffIfd(view, reader, Number(ifd0.entries[34853]) || 0, visited);
    const subIfdOffsets = normalizeTiffOffsetList(ifd0.entries[330]);
    const subIfds = subIfdOffsets.map((offset) => parseTiffIfd(view, reader, offset, visited)).filter((item) => Object.keys(item.entries).length);
    const subEntries = Object.assign({}, ...subIfds.map((item) => item.entries));

    const make = normalizeExifText(ifd0.entries[271]);
    const model = normalizeExifText(ifd0.entries[272]);
    const uniqueCameraModel = normalizeExifText(ifd0.entries[50708] || subEntries[50708]);
    const lensMake = normalizeExifText(exifIfd.entries[42035] || subEntries[42035]);
    const lensModel = normalizeExifText(exifIfd.entries[42036] || subEntries[42036]);
    const dateTime = ifd0.entries[306];
    const dateTimeOriginal = exifIfd.entries[36867] || subEntries[36867];
    const dateTimeDigitized = exifIfd.entries[36868] || subEntries[36868];
    const subSecTimeOriginal = exifIfd.entries[37521] || subEntries[37521];
    const offsetTimeOriginal = exifIfd.entries[36881] || subEntries[36881] || exifIfd.entries[36880];
    const sourceTime =
      formatSourceDateTimeValue(dateTimeOriginal, subSecTimeOriginal, offsetTimeOriginal) ||
      formatSourceDateTimeValue(dateTimeDigitized, exifIfd.entries[37522] || subEntries[37522], exifIfd.entries[36882] || subEntries[36882]) ||
      formatSourceDateTimeValue(dateTime, "", ifd0.entries[36880]);

    const latitude = dmsArrayToDecimal(gpsIfd.entries[1], gpsIfd.entries[2]);
    const longitude = dmsArrayToDecimal(gpsIfd.entries[3], gpsIfd.entries[4]);
    const sourceGps =
      latitude != null && longitude != null
        ? `${formatCoordinate(latitude)}, ${formatCoordinate(longitude)}`
        : "";

    const altitude = gpsIfd.entries[6];
    const altitudeRef = gpsIfd.entries[5];
    const sourceAltitude =
      Number.isFinite(Number(altitude))
        ? `${altitudeRef === 1 ? "-" : ""}${formatNumericValue(altitude, 1)} m`
        : "";

    const resolutionUnit = ifd0.entries[296];
    const sourceResolution = [formatResolutionTag(ifd0.entries[282], resolutionUnit), formatResolutionTag(ifd0.entries[283], resolutionUnit)]
      .filter(Boolean)
      .join(" / ");

    const dngVersion = formatDngVersionValue(ifd0.entries[50706] || subEntries[50706]);
    const sourceContainerLabel = dngVersion ? "DNG" : "TIFF";
    const sourceMime = dngVersion ? "image/x-adobe-dng" : "image/tiff";
    const sourceIso = formatNumericValue(exifIfd.entries[34855] || subEntries[34855], 0);
    const sourceFNumber = formatNumericValue(exifIfd.entries[33437] || subEntries[33437], 2);
    const sourceExposureTime = formatExposureTimeValue(exifIfd.entries[33434] || subEntries[33434]);
    const sourceFocalLength = formatNumericValue(exifIfd.entries[37386] || subEntries[37386], 1);
    const sourceFocalLength35mm = formatNumericValue(exifIfd.entries[41989] || subEntries[41989], 0);
    const sourceGpsTime = formatGpsTimeStampValue(gpsIfd.entries[7], gpsIfd.entries[29]);
    const sourceExifVersion = formatExifVersion(exifIfd.entries[36864] || subEntries[36864]);
    const sourceColorSpace = formatColorSpace(exifIfd.entries[40961] || subEntries[40961]);
    const sourceRawTags = Array.from(
      new Set([
        ...flattenTiffTagLabels("tiff", ifd0.entries),
        ...flattenTiffTagLabels("tiff", exifIfd.entries),
        ...flattenTiffTagLabels("gps", gpsIfd.entries),
        ...subIfds.flatMap((item) => flattenTiffTagLabels("tiff", item.entries)),
      ])
    );

    return {
      hasTiff: true,
      sourceContainerLabel,
      sourceMime,
      sourceDevice: [make, model || uniqueCameraModel].filter(Boolean).join(" / "),
      sourceLens: [lensMake, lensModel].filter(Boolean).join(" / "),
      sourceTime,
      sourceGps,
      sourceOrientation: ifd0.entries[274] ? String(ifd0.entries[274]) : "",
      sourceResolution,
      sourceTiffSummary: `IFD0:${Object.keys(ifd0.entries).length} / Exif:${Object.keys(exifIfd.entries).length} / GPS:${Object.keys(gpsIfd.entries).length} / SubIFD:${subIfds.length}`,
      sourceSoftware: normalizeExifText(ifd0.entries[305]),
      sourceExifVersion,
      sourceColorSpace,
      sourceIso: sourceIso ? `ISO ${sourceIso}` : "",
      sourceFNumber: sourceFNumber ? `f/${sourceFNumber}` : "",
      sourceExposureTime,
      sourceFocalLength: sourceFocalLength ? `${sourceFocalLength} mm` : "",
      sourceFocalLength35mm: sourceFocalLength35mm ? `${sourceFocalLength35mm} mm` : "",
      sourceAltitude,
      sourceGpsTime,
      sourceDngVersion: dngVersion,
      sourceRawTags,
    };
  } catch (error) {
    return {
      hasTiff: false,
      sourceContainerLabel: "",
      sourceMime: "",
        sourceTiffSummary: "",
        sourceTiffDateTime: "",
        sourceSoftware: "",
        sourceExifVersion: "",
        sourceColorSpace: "",
        sourceIso: "",
        sourceFNumber: "",
      sourceExposureTime: "",
      sourceFocalLength: "",
      sourceFocalLength35mm: "",
      sourceAltitude: "",
      sourceGpsTime: "",
      sourceDngVersion: "",
      sourceRawTags: [],
    };
  }
}

const METADATA_GROUP_LABELS = {
  exif: "EXIF 相机信息",
  xmp: "XMP 镜像信息",
  iptc: "IPTC 发布信息",
  icc: "ICC 色彩配置",
  gps: "GPS 定位信息",
  composite: "综合推导信息",
  file: "文件信息",
  jfif: "JFIF 头信息",
  png: "PNG 容器信息",
  pngText: "PNG 文本块",
  pngFile: "PNG 文件块",
  mpf: "MPF 多图容器",
  makerNotes: "厂商私有信息",
  photoshop: "Photoshop",
  riff: "RIFF 容器",
  gif: "GIF 容器",
};

function getExifReaderApi() {
  if (typeof ExifReader === "undefined") {
    return null;
  }
  if (typeof ExifReader.load === "function") {
    return ExifReader;
  }
  if (ExifReader && typeof ExifReader.default?.load === "function") {
    return ExifReader.default;
  }
  return null;
}

function formatMetadataValue(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value.trim();
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (Array.isArray(value)) {
    return value.map((item) => formatMetadataValue(item)).filter(Boolean).join(", ");
  }
  if (typeof value === "object") {
    if ("latitude" in value && "longitude" in value) {
      return `${formatCoordinate(value.latitude)}, ${formatCoordinate(value.longitude)}`;
    }
    try {
      return JSON.stringify(value);
    } catch (error) {
      return String(value);
    }
  }
  return String(value);
}

function formatReaderTagDescription(tag) {
  if (!tag) {
    return "";
  }

  if (typeof tag.description === "string" && tag.description.trim()) {
    return tag.description.trim();
  }

  return formatMetadataValue(tag.value);
}

function pickReaderTag(groups, groupNames, tagNames) {
  for (const groupName of groupNames) {
    const group = groups?.[groupName];
    if (!group) {
      continue;
    }
    for (const tagName of tagNames) {
      if (group[tagName]) {
        return group[tagName];
      }
    }
  }
  return null;
}

function createReaderMetadataGroups(groups) {
  if (!groups || typeof groups !== "object") {
    return [];
  }

  return Object.entries(groups)
    .filter(([, group]) => group && typeof group === "object" && Object.keys(group).length)
    .map(([groupName, group]) => {
      const entries = Object.entries(group)
        .filter(([tagName]) => tagName !== "_raw")
        .map(([tagName, tag]) => {
          const originalLabel = tag?.name || tagName;
          const presentation = getMetadataTagPresentation(groupName, tagName, originalLabel);
          return {
            key: tagName,
            label: presentation.label,
            originalLabel,
            description: presentation.description,
            id: tag?.id ?? null,
            value: formatReaderTagDescription(tag),
            rawValue: tag?.value,
            rawDescription: typeof tag?.description === "string" ? tag.description : "",
          };
        })
        .filter((entry) => entry.value);

      return {
        key: groupName,
        label: METADATA_GROUP_LABELS[groupName] || groupName.toUpperCase(),
        count: entries.length,
        tags: entries,
        previewTags: entries.slice(0, 24),
        moreCount: Math.max(0, entries.length - 24),
      };
    })
    .filter((group) => group.count > 0);
}

async function readSourceReaderData(file) {
  const readerApi = getExifReaderApi();
  if (!readerApi) {
    return {
      hasReaderData: false,
      sourceReaderGroups: [],
      sourceReaderTagCount: 0,
      sourceDevice: "",
      sourceLens: "",
      sourceTime: "",
      sourceGps: "",
      sourceAltitude: "",
      sourceMetadataKinds: "",
      sourceExifVersion: "",
      sourceColorSpace: "",
      sourceSoftware: "",
      sourceIso: "",
      sourceFNumber: "",
      sourceExposureTime: "",
      sourceFocalLength: "",
      sourceFocalLength35mm: "",
      sourceRawTags: [],
      sourceReaderFileType: "",
    };
  }

  try {
    const groups = await readerApi.load(file, {
      expanded: true,
      async: true,
      includeUnknown: true,
    });

    const metadataGroups = createReaderMetadataGroups(groups);
    const tagCount = metadataGroups.reduce((sum, group) => sum + group.count, 0);
    const deviceMake = formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["Make"]));
    const deviceModel = formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["Model", "UniqueCameraModel"]));
    const sourceLens =
      formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["LensModel"])) ||
      formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["LensInfo"]));
    const sourceTime =
      formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["DateTimeOriginal"])) ||
      formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["DateTimeDigitized"])) ||
      formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["DateTime"])) ||
      formatReaderTagDescription(pickReaderTag(groups, ["xmp"], ["DateCreated", "CreateDate", "ModifyDate"]));
    const latitude = Number(pickReaderTag(groups, ["gps"], ["Latitude"])?.value);
    const longitude = Number(pickReaderTag(groups, ["gps"], ["Longitude"])?.value);
    const altitude = Number(pickReaderTag(groups, ["gps"], ["Altitude"])?.value);
    const sourceGps =
      Number.isFinite(latitude) && Number.isFinite(longitude)
        ? `${formatCoordinate(latitude)}, ${formatCoordinate(longitude)}`
        : "";
    const metadataKinds = metadataGroups.map((group) => group.label).join(" + ");

    return {
      hasReaderData: metadataGroups.length > 0,
      sourceReaderGroups: metadataGroups,
      sourceReaderTagCount: tagCount,
      sourceDevice: [deviceMake, deviceModel].filter(Boolean).join(" / "),
      sourceLens,
      sourceTime,
      sourceGps,
      sourceAltitude: Number.isFinite(altitude) ? `${formatNumericValue(altitude, 1)} m` : "",
      sourceMetadataKinds: metadataKinds,
      sourceExifVersion: formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["ExifVersion"])),
      sourceColorSpace:
        formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["ColorSpace"])) ||
        formatReaderTagDescription(pickReaderTag(groups, ["icc"], ["ICC Description"])),
      sourceSoftware: formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["Software", "HostComputer"])),
      sourceIso:
        formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["ISOSpeedRatings", "PhotographicSensitivity"])) || "",
      sourceFNumber: formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["FNumber"])) || "",
      sourceExposureTime: formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["ExposureTime"])) || "",
      sourceFocalLength:
        formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["FocalLength"])) || "",
      sourceFocalLength35mm:
        formatReaderTagDescription(pickReaderTag(groups, ["composite"], ["FocalLength35efl"])) ||
        formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["FocalLengthIn35mmFormat", "FocalLengthIn35mmFilm"])) ||
        "",
      sourceRawTags: metadataGroups.flatMap((group) => group.tags.map((tag) => tag.label)),
      sourceReaderFileType: formatReaderTagDescription(pickReaderTag(groups, ["file"], ["FileType"])),
      sourceGpsTime:
        formatReaderTagDescription(pickReaderTag(groups, ["gps"], ["GPSDateTime"])) ||
        formatReaderTagDescription(pickReaderTag(groups, ["exif"], ["GPSDateStamp"])),
    };
  } catch (error) {
    return {
      hasReaderData: false,
      sourceReaderGroups: [],
      sourceReaderTagCount: 0,
      sourceDevice: "",
      sourceLens: "",
      sourceTime: "",
      sourceGps: "",
      sourceAltitude: "",
      sourceMetadataKinds: "",
      sourceExifVersion: "",
      sourceColorSpace: "",
      sourceSoftware: "",
      sourceIso: "",
      sourceFNumber: "",
      sourceExposureTime: "",
      sourceFocalLength: "",
      sourceFocalLength35mm: "",
      sourceRawTags: [],
      sourceReaderFileType: "",
      sourceGpsTime: "",
    };
  }
}

function inferCanvasFormat(file) {
  const type = (file.type || "").toLowerCase();
  const name = file.name.toLowerCase();
  if (type.includes("jpeg") || name.endsWith(".jpg") || name.endsWith(".jpeg")) {
    return "JPEG";
  }
  if (type.includes("webp") || name.endsWith(".webp")) {
    return "WEBP";
  }
  return "PNG";
}

function setSourceStatus(label, kind = "idle") {
  if (!dom.sourceStatus) {
    return;
  }

  const klass =
    kind === "error" ? "status-error" : kind === "warn" ? "status-warn" : kind === "ok" ? "status-ok" : "status-idle";
  dom.sourceStatus.textContent = label;
  dom.sourceStatus.className = `status-pill ${klass}`;
}

function renderSourceInsightsEmpty(message = "选择图片后，这里会直接显示原始设备、时间、GPS、SHA256、pHash，以及 EXIF / XMP / IPTC / ICC / TIFF-DNG 标签。") {
  if (!dom.sourceInsights) {
    return;
  }

  dom.sourceInsights.innerHTML = `
    <div class="empty-state compact">
      <strong>还没有原图检测结果</strong>
      <span>${escapeHtml(message)}</span>
    </div>
  `;
}

function getMetadataEditorSupport(groupKey, tagKey) {
  if (groupKey === "exif" && EXIF_EDITOR_CONFIGS[tagKey]) {
    return {
      badge: "EXIF + XMP",
      badgeClass: "",
      note: "标准字段：会优先写回导出的 JPEG EXIF，同时镜像到 XMP，便于重新检测。",
      canWriteExif: true,
      canMirrorXmp: true,
    };
  }

  if (groupKey === "gps" && GPS_EDITOR_CONFIGS[tagKey]) {
    return {
      badge: "GPS + XMP",
      badgeClass: "",
      note: "坐标类字段：会写回导出图的 GPS，同时保留一份 XMP 镜像。",
      canWriteExif: true,
      canMirrorXmp: true,
    };
  }

  return {
    badge: "XMP 镜像",
    badgeClass: "is-shadow",
    note: "这个字段会写进输出图的 XMP 镜像里，适合补齐、改写和二次检测。",
    canWriteExif: false,
    canMirrorXmp: true,
  };
}

function getMetadataCustomPlaceholder(row) {
  switch (row.valueType) {
    case "datetime":
      return "例如 2026:04:15 08:30:00";
    case "gps-latitude":
      return "例如 39.904200";
    case "gps-longitude":
      return "例如 116.407400";
    case "gps-altitude":
      return "例如 35.6";
    case "gps-date":
      return "例如 2026:04:15";
    case "gps-time":
      return "例如 08:30:45";
    case "timezone":
      return "例如 +08:00";
    case "subsec":
      return "例如 123";
    default:
      return row.value || "输入自定义值";
  }
}

function createMetadataEditorContext(item) {
  const groups = (item.sourceReaderGroups || [])
    .map((group) => {
      const rows = (group.tags || []).map((tag) => {
        const support = getMetadataEditorSupport(group.key, tag.key);
        const config = group.key === "exif" ? EXIF_EDITOR_CONFIGS[tag.key] : GPS_EDITOR_CONFIGS[tag.key];
        const presentation = getMetadataTagPresentation(group.key, tag.key, tag.originalLabel || tag.label || tag.key);
        const randomPolicy = getMetadataRandomPolicy(group.key, tag.key, config);
        const path = `${group.key}.${tag.key}`;
        const valueType = config?.valueType || (group.key === "gps" ? "text" : "text");
        const currentValue = normalizeExifText(tag.value);
        const explanation = tag.description || presentation.description;
        const originalLabel = tag.originalLabel || tag.key;

        return {
          path,
          key: tag.key,
          label: presentation.label,
          originalLabel,
          groupKey: group.key,
          groupLabel: group.label,
          currentValue,
          rawValue: tag.rawValue,
          rawDescription: tag.rawDescription || "",
          explanation,
          id: tag.id,
          valueType,
          randomType: config?.randomType || "text",
          randomAllowed: randomPolicy.allowRandom,
          randomHint: randomPolicy.hint,
          support,
          placeholder: getMetadataCustomPlaceholder({
            valueType,
            value: currentValue,
          }),
          searchText: `${group.label} ${presentation.label} ${originalLabel} ${tag.key} ${explanation} ${currentValue}`.toLowerCase(),
        };
      });

      return {
        ...group,
        rows,
      };
    })
    .filter((group) => group.rows.length);

  return {
    fileName: item.fileName,
    groups,
    rowCount: groups.reduce((sum, group) => sum + group.rows.length, 0),
  };
}

function renderMetadataEditorEmpty(message) {
  metadataEditorContext = null;
  if (dom.metadataSearch) {
    dom.metadataSearch.value = "";
    dom.metadataSearch.disabled = true;
  }
  if (dom.metadataEditorSummary) {
    dom.metadataEditorSummary.textContent = message;
  }
  if (dom.metadataEditorBody) {
    dom.metadataEditorBody.innerHTML = `
      <div class="empty-state compact">
        <strong>还没有可编辑的元数据</strong>
        <span>${escapeHtml(message)}</span>
      </div>
    `;
  }
}

function setMetadataEditorMode(rowElement, mode) {
  if (!rowElement) {
    return;
  }

  if (mode === "random" && rowElement.dataset.randomAllowed !== "true") {
    mode = "keep";
  }

  rowElement.dataset.mode = mode;
  rowElement.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });

  const customWrap = rowElement.querySelector(".editor-custom-wrap");
  if (customWrap) {
    customWrap.hidden = mode !== "custom";
  }
}

function filterMetadataEditorRows(query) {
  if (!dom.metadataEditorBody) {
    return;
  }

  const normalized = query.trim().toLowerCase();
  const groups = dom.metadataEditorBody.querySelectorAll(".editor-group");
  groups.forEach((group) => {
    const rows = Array.from(group.querySelectorAll(".editor-row"));
    let visibleCount = 0;
    rows.forEach((row) => {
      const haystack = (row.dataset.search || "").toLowerCase();
      const visible = !normalized || haystack.includes(normalized);
      row.classList.toggle("is-hidden", !visible);
      if (visible) {
        visibleCount += 1;
      }
    });
    group.hidden = visibleCount === 0;
  });
}

function renderMetadataEditor(item) {
  metadataEditorContext = createMetadataEditorContext(item);

  if (!metadataEditorContext.rowCount) {
    renderMetadataEditorEmpty("当前图片没有检测到可编辑的标签，或者浏览器没读出可重写的元数据。");
    return;
  }

  if (dom.metadataSearch) {
    dom.metadataSearch.disabled = false;
    dom.metadataSearch.value = "";
  }

  if (dom.metadataEditorSummary) {
    dom.metadataEditorSummary.textContent = `已从 ${item.fileName} 读取到 ${metadataEditorContext.rowCount} 项标签。能翻译的字段都会优先显示中文；高影响字段会自动排除在“一键随机”之外，但仍可手动自定义。`;
  }

  dom.metadataEditorBody.innerHTML = `
    <div class="editor-groups">
      ${metadataEditorContext.groups
        .map(
          (group, index) => `
            <details class="editor-group" ${index < 2 ? "open" : ""}>
              <summary>
                <div class="editor-group-summary">
                  <strong>${escapeHtml(group.label)}</strong>
                  <span>${escapeHtml(group.rows.length)} 项</span>
                </div>
              </summary>
              <div class="editor-group-body">
                ${group.rows
                  .map(
                    (row) => `
                      <article
                        class="editor-row"
                        data-path="${escapeHtml(row.path)}"
                        data-group-key="${escapeHtml(row.groupKey)}"
                        data-tag-key="${escapeHtml(row.key)}"
                        data-value-type="${escapeHtml(row.valueType)}"
                        data-random-type="${escapeHtml(row.randomType)}"
                        data-random-allowed="${row.randomAllowed ? "true" : "false"}"
                        data-mode="keep"
                        data-search="${escapeHtml(row.searchText)}"
                      >
                        <div class="editor-row-head">
                          <div class="editor-row-title">
                            <strong>
                              ${escapeHtml(row.label)}
                              <span class="editor-badge ${row.support.badgeClass}">${escapeHtml(row.support.badge)}</span>
                              <span class="editor-badge ${row.randomAllowed ? "is-safe" : "is-protected"}">${row.randomAllowed ? "可随机" : "随机保护"}</span>
                            </strong>
                            <span class="editor-row-subline">${escapeHtml(row.groupLabel)} · 原始键 ${escapeHtml(row.key)}${row.id ? ` · tag ${escapeHtml(row.id)}` : ""}</span>
                            ${
                              row.originalLabel && row.originalLabel !== row.key
                                ? `<span class="editor-row-subline">原始标签：${escapeHtml(row.originalLabel)}</span>`
                                : ""
                            }
                            <span class="editor-row-current">当前值：${escapeHtml(row.currentValue || "未发现")}</span>
                            <p class="editor-row-note">${escapeHtml(row.explanation)}</p>
                          </div>
                        </div>
                        <div class="editor-row-actions">
                          <div class="editor-mode-group" role="group" aria-label="${escapeHtml(row.label)} 模式">
                            <button class="editor-mode-chip is-active" type="button" data-mode="keep">保持</button>
                            <button class="editor-mode-chip" type="button" data-mode="random" ${row.randomAllowed ? "" : `disabled title="${escapeHtml(row.randomHint)}"`}>随机</button>
                            <button class="editor-mode-chip" type="button" data-mode="custom">自定义</button>
                          </div>
                        </div>
                        <div class="editor-custom-wrap" hidden>
                          <input
                            class="editor-custom-input"
                            type="text"
                            value="${escapeHtml(row.currentValue)}"
                            placeholder="${escapeHtml(row.placeholder)}"
                          >
                          <p class="editor-row-note">自定义后会覆盖这一项的检测值；留空则回退到当前值。</p>
                        </div>
                        <p class="editor-support-note">${escapeHtml(`${row.support.note} ${row.randomHint}`)}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </details>
          `
        )
        .join("")}
    </div>
  `;
}

function syncMetadataEditorFromItems(items) {
  if (!items.length) {
    renderMetadataEditorEmpty("先上传单张图片完成检测，左侧才会出现逐项随机和自定义入口。");
    return;
  }

  if (items.length > 1) {
    renderMetadataEditorEmpty("批量模式下先保持右侧检测结果；左侧逐项元数据编辑目前只对单张图片开放，避免把第一张图的标签误套到全部文件。");
    return;
  }

  renderMetadataEditor(items[0]);
}

function applyMetadataBatchAction(action) {
  if (!dom.metadataEditorBody) {
    return;
  }

  const rows = Array.from(dom.metadataEditorBody.querySelectorAll(".editor-row"));
  if (!rows.length) {
    return;
  }

  if (action === "random-all") {
    let randomizedCount = 0;
    let protectedCount = 0;

    rows.forEach((rowElement) => {
      if (rowElement.dataset.randomAllowed === "true") {
        setMetadataEditorMode(rowElement, "random");
        randomizedCount += 1;
      } else {
        setMetadataEditorMode(rowElement, "keep");
        protectedCount += 1;
      }
    });

    setGlobalMessage(
      protectedCount
        ? `已切换为“随机安全项”：${randomizedCount} 项会随机，${protectedCount} 项高影响或结构字段已自动保持。`
        : `已将 ${randomizedCount} 项标签切换为随机。`
    );
    return;
  }

  rows.forEach((rowElement) => {
    setMetadataEditorMode(rowElement, "keep");
  });
  setGlobalMessage("已将所有标签切换为保持。");
}

function collectMetadataEditorEdits() {
  if (!metadataEditorContext || !dom.metadataEditorBody) {
    return [];
  }

  const rowMap = new Map(
    metadataEditorContext.groups.flatMap((group) => group.rows.map((row) => [row.path, row]))
  );

  return Array.from(dom.metadataEditorBody.querySelectorAll(".editor-row"))
    .map((rowElement) => {
      const template = rowMap.get(rowElement.dataset.path || "");
      if (!template) {
        return null;
      }

      const customInput = rowElement.querySelector(".editor-custom-input");
      return {
        ...template,
        mode: rowElement.dataset.mode || "keep",
        customValue: customInput ? customInput.value.trim() : "",
      };
    })
    .filter(Boolean);
}

function releaseSourceAuditItems(items) {
  items.forEach((item) => {
    if (item.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }
  });
}

async function readSourceExifData(file) {
  if (typeof piexif === "undefined") {
    return {
      hasExif: false,
      sourceDevice: "",
      sourceLens: "",
      sourceTime: "",
      sourceGps: "",
      sourceExifSummary: "",
      sourceOrientation: "",
      sourceResolution: "",
      sourceExifVersion: "",
      sourceColorSpace: "",
      sourceEmbeddedThumb: "",
      sourceRawTags: [],
    };
  }

  try {
    const dataUrl = await blobToDataUrl(file);
    const exif = piexif.load(dataUrl);
    const zeroth = exif["0th"] || {};
    const exifBlock = exif.Exif || {};
    const gps = exif.GPS || {};
    const hasExif = Object.keys(zeroth).length + Object.keys(exifBlock).length + Object.keys(gps).length > 0;

    const make = normalizeExifText(zeroth[piexif.ImageIFD.Make]);
    const model = normalizeExifText(zeroth[piexif.ImageIFD.Model]);
    const lensMake = normalizeExifText(exifBlock[piexif.ExifIFD.LensMake]);
    const lensModel = normalizeExifText(exifBlock[piexif.ExifIFD.LensModel]);
    const sourceTime = normalizeExifText(
      exifBlock[piexif.ExifIFD.DateTimeOriginal] ||
        exifBlock[piexif.ExifIFD.DateTimeDigitized] ||
        zeroth[piexif.ImageIFD.DateTime]
    );

    const latitude = dmsArrayToDecimal(gps[piexif.GPSIFD.GPSLatitudeRef], gps[piexif.GPSIFD.GPSLatitude]);
    const longitude = dmsArrayToDecimal(gps[piexif.GPSIFD.GPSLongitudeRef], gps[piexif.GPSIFD.GPSLongitude]);
    const sourceGps =
      latitude != null && longitude != null
        ? `${formatCoordinate(latitude)}, ${formatCoordinate(longitude)}`
        : "";
    const resolutionUnit = zeroth[piexif.ImageIFD.ResolutionUnit];
    const xResolution = formatResolutionTag(zeroth[piexif.ImageIFD.XResolution], resolutionUnit);
    const yResolution = formatResolutionTag(zeroth[piexif.ImageIFD.YResolution], resolutionUnit);
    const { exifSectionSummary, rawTagLabels } = summarizeDetectedExif(exif);

    return {
      hasExif,
      sourceDevice: [make, model].filter(Boolean).join(" / "),
      sourceLens: [lensMake, lensModel].filter(Boolean).join(" / "),
      sourceTime,
      sourceGps,
      sourceExifLevel:
        hasExif && ![make, model, lensMake, lensModel, sourceTime, sourceGps].some(Boolean)
          ? "仅基础 EXIF"
          : hasExif
            ? "含关键字段"
            : "未发现",
      sourceExifSummary: exifSectionSummary,
      sourceOrientation: zeroth[piexif.ImageIFD.Orientation] ? String(zeroth[piexif.ImageIFD.Orientation]) : "",
      sourceResolution: [xResolution, yResolution].filter(Boolean).join(" / "),
      sourceExifVersion: formatExifVersion(exifBlock[piexif.ExifIFD.ExifVersion]),
      sourceColorSpace: formatColorSpace(exifBlock[piexif.ExifIFD.ColorSpace]),
      sourceEmbeddedThumb: exif.thumbnail?.length ? `${exif.thumbnail.length} bytes` : "",
      sourceRawTags: rawTagLabels,
    };
  } catch (error) {
    return {
      hasExif: false,
      sourceDevice: "",
      sourceLens: "",
      sourceTime: "",
      sourceGps: "",
      sourceExifLevel: "未发现",
      sourceExifSummary: "",
      sourceOrientation: "",
      sourceResolution: "",
      sourceExifVersion: "",
      sourceColorSpace: "",
      sourceEmbeddedThumb: "",
      sourceRawTags: [],
    };
  }
}

async function readSourceMetadataData(file, srcBuffer) {
  const readerInfo = await readSourceReaderData(file);
  const exifInfo = await readSourceExifData(file);
  const tiffInfo = readSourceTiffData(srcBuffer);
  const xmpInfo = summarizeDetectedXmp(extractXmpPacket(srcBuffer));
  const sourceDevice = readerInfo.sourceDevice || tiffInfo.sourceDevice || exifInfo.sourceDevice || xmpInfo.xmpDevice;
  const sourceLens = readerInfo.sourceLens || tiffInfo.sourceLens || exifInfo.sourceLens || xmpInfo.xmpLens;
  const sourceTime = readerInfo.sourceTime || tiffInfo.sourceTime || exifInfo.sourceTime || xmpInfo.xmpTime;
  const sourceGps = readerInfo.sourceGps || tiffInfo.sourceGps || exifInfo.sourceGps || xmpInfo.xmpGps;
  const sourceRawTags = Array.from(
    new Set([
      ...(readerInfo.sourceRawTags || []),
      ...(tiffInfo.sourceRawTags || []),
      ...(exifInfo.sourceRawTags || []),
      ...xmpInfo.xmpTags,
    ])
  );
  const hasAnyMetadata = Boolean(readerInfo.hasReaderData || exifInfo.hasExif || tiffInfo.hasTiff || xmpInfo.hasXmp);
  const hasKeyFields = [
    sourceDevice,
    sourceLens,
    sourceTime,
    sourceGps,
    readerInfo.sourceIso || tiffInfo.sourceIso,
    readerInfo.sourceExposureTime || tiffInfo.sourceExposureTime,
    readerInfo.sourceFocalLength || tiffInfo.sourceFocalLength,
    readerInfo.sourceFNumber || tiffInfo.sourceFNumber,
  ].some(Boolean);

  return {
    ...readerInfo,
    ...exifInfo,
    ...tiffInfo,
    hasXmp: xmpInfo.hasXmp,
    sourceDevice,
    sourceLens,
    sourceTime,
    sourceGps,
    sourceXmpSummary: xmpInfo.xmpSummary,
    sourceMetadataKinds:
      readerInfo.sourceMetadataKinds ||
      [tiffInfo.hasTiff ? tiffInfo.sourceContainerLabel || "TIFF/DNG" : "", exifInfo.hasExif ? "EXIF" : "", xmpInfo.hasXmp ? "XMP" : ""]
        .filter(Boolean)
        .join(" + "),
    sourceRawTags,
    sourceExifLevel: hasAnyMetadata ? (hasKeyFields ? "含关键字段" : "仅基础元数据") : "未发现元数据",
  };
}

async function inspectSourceFile(file) {
  const srcBuffer = await file.arrayBuffer();
  const sourceSha = await sha256Hex(srcBuffer);
  const sourceFormat = sniffImageFormat(srcBuffer, file.type, file.name);
  const bitmap = await loadBitmap(file, srcBuffer, sourceFormat);
  const sourceCanvas = renderSourceToCanvas(bitmap, sourceFormat.outputFormat);
  if (bitmap.close) {
    bitmap.close();
  }

  const sourcePHash = computePHash(sourceCanvas);
  const sourceExif = await readSourceMetadataData(file, srcBuffer);
  const previewUrl = await createPreviewUrlFromCanvas(sourceCanvas);

  return {
    fileName: file.name,
    fileType: formatSourceMimeLabel(sourceFormat, file, {
      label: sourceExif.sourceContainerLabel || sourceExif.sourceReaderFileType || sourceFormat.label,
      mime: sourceExif.sourceMime || sourceFormat.mime,
    }),
    sourceFormatLabel: sourceExif.sourceContainerLabel || sourceExif.sourceReaderFileType || sourceFormat.label,
    sizeLabel: formatBytes(file.size),
    dimensions: `${sourceCanvas.width} × ${sourceCanvas.height}`,
    sourceSha,
    sourcePHash,
    previewUrl,
    ...sourceExif,
  };
}

function renderSourceInsights(items) {
  if (!dom.sourceInsights) {
    return;
  }

  if (items.length === 0) {
    renderSourceInsightsEmpty();
    return;
  }

  dom.sourceInsights.innerHTML = items
    .map((item) => {
      const pills = [
        `<span class="hash-pill">格式 ${escapeHtml(item.fileType)}</span>`,
        `<span class="hash-pill">尺寸 ${escapeHtml(item.dimensions)}</span>`,
        `<span class="hash-pill">大小 ${escapeHtml(item.sizeLabel)}</span>`,
        `<span class="hash-pill">${item.hasExif ? "检测到 EXIF" : "未检测到 EXIF"}</span>`,
        `<span class="hash-pill">${item.hasXmp ? "检测到 XMP" : "未检测到 XMP"}</span>`,
        `<span class="hash-pill">${escapeHtml(item.sourceExifLevel || "未发现元数据")}</span>`,
      ];

      if (item.sourceDevice) {
        pills.push(`<span class="hash-pill">原设备 ${escapeHtml(item.sourceDevice)}</span>`);
      }
      if (item.sourceGps) {
        pills.push(`<span class="hash-pill">原 GPS ${escapeHtml(item.sourceGps)}</span>`);
      }
      if (item.sourceExifSummary) {
        pills.push(`<span class="hash-pill">EXIF结构 ${escapeHtml(item.sourceExifSummary)}</span>`);
      }
      if (item.sourceTiffSummary) {
        pills.push(`<span class="hash-pill">${escapeHtml(item.sourceContainerLabel || "TIFF")} ${escapeHtml(item.sourceTiffSummary)}</span>`);
      }
      if (item.sourceXmpSummary) {
        pills.push(`<span class="hash-pill">XMP ${escapeHtml(item.sourceXmpSummary)}</span>`);
      }
      if (item.sourceDngVersion) {
        pills.push(`<span class="hash-pill">DNG ${escapeHtml(item.sourceDngVersion)}</span>`);
      }
      if (item.sourceReaderTagCount) {
        pills.push(`<span class="hash-pill">总标签 ${escapeHtml(item.sourceReaderTagCount)}</span>`);
      }

      const summaryLines = [
        `检测结论 : ${item.sourceExifLevel || "未发现元数据"}`,
        `元数据容器 : ${item.sourceMetadataKinds || "未发现"}`,
        `原始设备 : ${item.sourceDevice || "未发现"}`,
        `原始镜头 : ${item.sourceLens || "未发现"}`,
        `原始时间 : ${item.sourceTime || "未发现"}`,
        `原始位置 : ${item.sourceGps || "未发现"}`,
        `原始海拔 : ${item.sourceAltitude || "未发现"}`,
        `GPS时间 : ${item.sourceGpsTime || "未发现"}`,
        `EXIF结构 : ${item.sourceExifSummary || "未发现"}`,
        `TIFF/DNG摘要 : ${item.sourceTiffSummary || "未发现"}`,
        `XMP摘要 : ${item.sourceXmpSummary || "未发现"}`,
        `方向标签 : ${item.sourceOrientation || "未发现"}`,
        `分辨率标签 : ${item.sourceResolution || "未发现"}`,
        `ExifVersion : ${item.sourceExifVersion || "未发现"}`,
        `DNG版本 : ${item.sourceDngVersion || "未发现"}`,
        `拍摄参数 : ${[item.sourceExposureTime, item.sourceFNumber, item.sourceIso].filter(Boolean).join(" · ") || "未发现"}`,
        `焦距信息 : ${[item.sourceFocalLength, item.sourceFocalLength35mm ? `35mm 等效 ${item.sourceFocalLength35mm}` : ""].filter(Boolean).join(" · ") || "未发现"}`,
        `软件版本 : ${item.sourceSoftware || "未发现"}`,
        `色彩空间 : ${item.sourceColorSpace || "未发现"}`,
        `嵌入缩略图 : ${item.sourceEmbeddedThumb || "未发现"}`,
        `已识别标签 : ${item.sourceRawTags.length ? item.sourceRawTags.join(", ") : "未发现"}`,
        `源 SHA256 : ${item.sourceSha}`,
        `源 pHash  : ${item.sourcePHash}`,
      ];

      if ((item.hasExif || item.hasXmp || item.hasTiff) && item.sourceExifLevel === "仅基础元数据") {
        summaryLines.splice(
          1,
          0,
          "说明 : 这张图确实带有元数据容器，但里面主要是方向、分辨率、像素尺寸、缩略图或基础 XMP / TIFF 标签，没有常见的设备 / 时间 / GPS。"
        );
      }

      if ((item.hasExif || item.hasXmp || item.hasTiff) && item.sourceExifLevel === "仅基础元数据" && /jpe?g/i.test(item.fileType)) {
        summaryLines.splice(
          2,
          0,
          "提示 : 如果你在苹果相册里看到的是 iPhone、镜头和地图信息，但这里的 JPG 没带出来，通常是原始 HEIF / 照片库条目的信息没有跟着这次导出的 JPG 一起保留下来。"
        );
      }

      const richGroups = (item.sourceReaderGroups || [])
        .map(
          (group) => `
            <section class="metadata-group">
              <div class="metadata-group-head">
                <strong>${escapeHtml(group.label)}</strong>
                <span>${escapeHtml(group.count)} 项</span>
              </div>
              <div class="metadata-grid">
                ${(group.previewTags || group.tags)
                  .map(
                    (tag) => `
                      <div class="metadata-row">
                        <span class="metadata-key">${escapeHtml(tag.label)}</span>
                        <span class="metadata-value">${escapeHtml(tag.value)}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
              ${group.moreCount ? `<p class="metadata-more">还有 ${escapeHtml(group.moreCount)} 项未展开</p>` : ""}
            </section>
          `
        )
        .join("");

      return `
        <article class="source-card">
          <div class="source-card-head">
            <img class="source-thumb" src="${item.previewUrl}" alt="${escapeHtml(item.fileName)} 预览">
            <div>
              <h4>${escapeHtml(item.fileName)}</h4>
              <p>${escapeHtml(item.fileType)} · ${escapeHtml(item.sizeLabel)} · ${escapeHtml(item.dimensions)}</p>
            </div>
          </div>
          <div class="meta-list">
            ${pills.join("")}
          </div>
          <pre class="summary">${escapeHtml(summaryLines.join("\n"))}</pre>
          ${richGroups ? `<div class="metadata-groups">${richGroups}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

async function scanSelectedFiles() {
  const files = Array.from(dom.images.files || []);
  releaseSourceAuditItems(sourceAuditItems);
  sourceAuditItems = [];

  if (!files.length) {
    renderSourceInsightsEmpty();
    syncMetadataEditorFromItems([]);
    setSourceStatus("等待上传", "idle");
    return;
  }

  setSourceStatus(`正在检测 0/${files.length}`, "warn");
  renderSourceInsightsEmpty("正在读取原图中的设备、GPS、时间、哈希，以及 EXIF / XMP / IPTC / ICC / TIFF-DNG 信息...");

  const nextItems = [];
  try {
    for (let index = 0; index < files.length; index += 1) {
      const item = await inspectSourceFile(files[index]);
      nextItems.push(item);
      renderSourceInsights(nextItems);
      syncMetadataEditorFromItems(nextItems);
      setSourceStatus(`正在检测 ${index + 1}/${files.length}`, index + 1 === files.length ? "ok" : "warn");
    }
    sourceAuditItems = nextItems;
    syncMetadataEditorFromItems(nextItems);
    setSourceStatus(`已检测 ${nextItems.length} 张原图`, "ok");
  } catch (error) {
    releaseSourceAuditItems(nextItems);
    renderSourceInsightsEmpty(`原图检测失败: ${error.message}`);
    renderMetadataEditorEmpty(`原图检测失败：${error.message}`);
    setSourceStatus("检测失败", "error");
  }
}

function createRandomExifDate() {
  const date = new Date();
  date.setDate(date.getDate() - randomInt(0, RANDOM_TIME_MAX_DAYS_BACK));
  date.setHours(randomInt(7, 22), randomInt(0, 59), randomInt(0, 59), 0);
  return date;
}

function decimalToRationalArray(value) {
  const absolute = Math.abs(value);
  const degrees = Math.floor(absolute);
  const minutesFloat = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = Math.round((minutesFloat - minutes) * 60 * 100);
  return [
    [degrees, 1],
    [minutes, 1],
    [seconds, 100],
  ];
}

function shouldForceAppleCompatibleJpeg(options) {
  return !options.stripExif && options.outputFormat !== APPLE_METADATA_OUTPUT_FORMAT;
}

function buildDeviceExifProfile(deviceName, imageWidth, imageHeight) {
  const device = DEVICE_PRESETS[deviceName];
  if (!device) {
    return null;
  }

  const [make, model] = device;
  const defaults = SMARTPHONE_BRANDS.has(make) ? SMARTPHONE_DEFAULT_EXIF : CAMERA_DEFAULT_EXIF;
  const overrides = DEVICE_EXIF_OVERRIDES[deviceName] || {};

  return {
    make,
    model,
    lensMake: overrides.lensMake || make,
    lensModel: overrides.lensModel || (SMARTPHONE_BRANDS.has(make) ? `${model} main camera` : `${model} standard lens`),
    focalLength: overrides.focalLength || defaults.focalLength,
    focalLengthIn35mmFilm:
      overrides.focalLengthIn35mmFilm ?? defaults.focalLengthIn35mmFilm,
    fNumber: overrides.fNumber || defaults.fNumber,
    exposureTime: overrides.exposureTime || defaults.exposureTime,
    iso: overrides.iso ?? defaults.iso,
    imageWidth,
    imageHeight,
  };
}

function normalizeCameraText(value) {
  return normalizeExifText(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function listDeviceProfiles(imageWidth, imageHeight) {
  return Object.keys(DEVICE_PRESETS)
    .map((deviceName) => ({
      deviceName,
      profile: buildDeviceExifProfile(deviceName, imageWidth, imageHeight),
    }))
    .filter((item) => item.profile);
}

function findDeviceProfileByMakeModel(make, model, imageWidth, imageHeight) {
  const normalizedMake = normalizeCameraText(make);
  const normalizedModel = normalizeCameraText(model);
  const profiles = listDeviceProfiles(imageWidth, imageHeight);

  if (normalizedMake && normalizedModel) {
    const exact = profiles.find(({ profile }) => {
      return normalizeCameraText(profile.make) === normalizedMake && normalizeCameraText(profile.model) === normalizedModel;
    });
    if (exact) {
      return exact.profile;
    }
  }

  if (normalizedModel) {
    const modelMatch = profiles.find(({ profile }) => normalizeCameraText(profile.model).includes(normalizedModel) || normalizedModel.includes(normalizeCameraText(profile.model)));
    if (modelMatch) {
      return modelMatch.profile;
    }
  }

  if (normalizedMake) {
    const makeMatch = profiles.find(({ profile }) => normalizeCameraText(profile.make) === normalizedMake);
    if (makeMatch) {
      return makeMatch.profile;
    }
  }

  return null;
}

function createAdHocDeviceProfile(make, model, imageWidth, imageHeight) {
  const safeMake = normalizeExifText(make) || "Camera";
  const safeModel = normalizeExifText(model) || `${safeMake} Camera`;
  const defaults = SMARTPHONE_BRANDS.has(safeMake) ? SMARTPHONE_DEFAULT_EXIF : CAMERA_DEFAULT_EXIF;

  return {
    make: safeMake,
    model: safeModel,
    lensMake: safeMake,
    lensModel: `${safeModel} main camera`,
    focalLength: defaults.focalLength,
    focalLengthIn35mmFilm: defaults.focalLengthIn35mmFilm,
    fNumber: defaults.fNumber,
    exposureTime: defaults.exposureTime,
    iso: defaults.iso,
    imageWidth,
    imageHeight,
  };
}

function readMetadataEditText(edit) {
  if (!edit) {
    return "";
  }
  if (edit.mode === "custom") {
    return normalizeExifText(edit.customValue || edit.currentValue);
  }
  return formatResolvedMetadataText(edit, resolveKeepMetadataRawValue(edit), edit.currentValue);
}

function chooseCoherentDeviceProfile(edits, session, options) {
  const findEdit = (key) => edits.find((edit) => edit.groupKey === "exif" && edit.key === key);
  const makeEdit = findEdit("Make");
  const modelEdit = findEdit("Model");
  const makeText = readMetadataEditText(makeEdit);
  const modelText = readMetadataEditText(modelEdit);
  const hasCustomDevicePart = makeEdit?.mode === "custom" || modelEdit?.mode === "custom";
  const hasRandomDevicePart = makeEdit?.mode === "random" || modelEdit?.mode === "random";

  if (hasCustomDevicePart) {
    return (
      findDeviceProfileByMakeModel(makeText, modelText, options.imageWidth, options.imageHeight) ||
      createAdHocDeviceProfile(makeText || session.selectedDeviceProfile?.make, modelText || session.selectedDeviceProfile?.model, options.imageWidth, options.imageHeight)
    );
  }

  if (hasRandomDevicePart) {
    return session.randomDeviceProfile || session.selectedDeviceProfile;
  }

  return (
    findDeviceProfileByMakeModel(makeText, modelText, options.imageWidth, options.imageHeight) ||
    session.selectedDeviceProfile ||
    session.randomDeviceProfile
  );
}

function pickRandomValue(values, fallback = "") {
  if (!Array.isArray(values) || values.length === 0) {
    return fallback;
  }
  return values[randomInt(0, values.length - 1)] ?? fallback;
}

function unwrapMetadataRawValue(value) {
  if (Array.isArray(value) && value.length === 1) {
    return unwrapMetadataRawValue(value[0]);
  }
  return value;
}

function normalizeEditorExifDateInput(value) {
  const text = normalizeExifText(value).replace("T", " ");
  const match = text.match(/^(\d{4})[-:](\d{1,2})[-:](\d{1,2})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?$/);
  if (!match) {
    return text;
  }
  const [, year, month, day, hours = "8", minutes = "0", seconds = "0"] = match;
  return `${year}:${pad(month)}:${pad(day)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function normalizeEditorGpsDateInput(value) {
  const text = normalizeExifText(value);
  const match = text.match(/^(\d{4})[-:](\d{1,2})[-:](\d{1,2})$/);
  if (!match) {
    return text;
  }
  const [, year, month, day] = match;
  return `${year}:${pad(month)}:${pad(day)}`;
}

function normalizeEditorGpsTimeInput(value) {
  const text = normalizeExifText(value);
  const match = text.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/);
  if (!match) {
    return text;
  }
  const [, hours, minutes, seconds = "0"] = match;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function parseFlexibleNumericInput(value) {
  const text = normalizeExifText(value).replace(/^f\//i, "");
  if (!text) {
    return null;
  }
  const fraction = text.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
  if (fraction) {
    const numerator = Number(fraction[1]);
    const denominator = Number(fraction[2]);
    if (Number.isFinite(numerator) && Number.isFinite(denominator) && denominator !== 0) {
      return numerator / denominator;
    }
  }

  const match = text.match(/-?\d+(?:\.\d+)?/);
  if (!match) {
    return null;
  }

  const number = Number(match[0]);
  return Number.isFinite(number) ? number : null;
}

function parseRationalValue(value, denominator = 1000) {
  if (Array.isArray(value) && value.length === 2 && value.every((item) => Number.isFinite(Number(item)))) {
    return [Number(value[0]), Number(value[1])];
  }

  const number = typeof value === "number" ? value : parseFlexibleNumericInput(value);
  if (!Number.isFinite(number)) {
    return null;
  }
  return decimalToRational(number, denominator);
}

function parseExposureTimeValue(value) {
  const text = normalizeExifText(value);
  if (!text) {
    return null;
  }

  const fraction = text.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (fraction) {
    const numerator = Number(fraction[1]);
    const denominator = Number(fraction[2]);
    if (Number.isFinite(numerator) && Number.isFinite(denominator) && denominator !== 0) {
      return [numerator, denominator];
    }
  }

  const numeric = parseFlexibleNumericInput(text);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return null;
  }
  return decimalToRational(numeric, 100000);
}

function formatResolvedMetadataText(edit, rawValue, fallbackValue = "") {
  const value = unwrapMetadataRawValue(rawValue);

  switch (edit.valueType) {
    case "datetime":
      return normalizeEditorExifDateInput(value || fallbackValue);
    case "timezone":
      return normalizeExifText(value || fallbackValue);
    case "subsec":
      return normalizeExifText(value || fallbackValue);
    case "int": {
      const number = Number(value);
      return Number.isFinite(number) ? String(Math.round(number)) : normalizeExifText(fallbackValue);
    }
    case "rational-number": {
      const number = rationalToNumber(value);
      if (!Number.isFinite(number) || number <= 0) {
        return normalizeExifText(fallbackValue);
      }
      if (edit.key === "FNumber") {
        return `f/${formatNumericValue(number, 1)}`;
      }
      if (edit.key === "DigitalZoomRatio") {
        return `${formatNumericValue(number, 2)}x`;
      }
      return formatNumericValue(number, 2);
    }
    case "rational-seconds": {
      const number = rationalToNumber(value);
      return formatExposureTimeValue(number) || normalizeExifText(fallbackValue);
    }
    case "gps-latitude":
    case "gps-longitude": {
      const number = Number(value);
      return Number.isFinite(number) ? formatCoordinate(number) : normalizeExifText(fallbackValue);
    }
    case "gps-altitude": {
      const number = Number(value);
      return Number.isFinite(number) ? `${formatNumericValue(number, 1)} m` : normalizeExifText(fallbackValue);
    }
    case "gps-date":
      return normalizeEditorGpsDateInput(value || fallbackValue);
    case "gps-time":
      return normalizeEditorGpsTimeInput(value || fallbackValue);
    default:
      return normalizeExifText(value || fallbackValue);
  }
}

function resolveKeepMetadataRawValue(edit) {
  const rawValue = unwrapMetadataRawValue(edit.rawValue);
  if (rawValue != null && rawValue !== "") {
    return rawValue;
  }

  switch (edit.valueType) {
    case "datetime":
      return normalizeEditorExifDateInput(edit.currentValue);
    case "gps-date":
      return normalizeEditorGpsDateInput(edit.currentValue);
    case "gps-time":
      return normalizeEditorGpsTimeInput(edit.currentValue);
    case "rational-number":
      return parseRationalValue(edit.currentValue);
    case "rational-seconds":
      return parseExposureTimeValue(edit.currentValue);
    case "gps-latitude":
    case "gps-longitude":
    case "gps-altitude":
      return parseFlexibleNumericInput(edit.currentValue);
    case "int": {
      const number = parseFlexibleNumericInput(edit.currentValue);
      return Number.isFinite(number) ? Math.round(number) : null;
    }
    default:
      return normalizeExifText(edit.currentValue);
  }
}

function resolveCustomMetadataRawValue(edit) {
  const customValue = edit.customValue || edit.currentValue;

  switch (edit.valueType) {
    case "datetime":
      return normalizeEditorExifDateInput(customValue);
    case "timezone":
      return normalizeExifText(customValue);
    case "subsec":
      return normalizeExifText(customValue).replace(/\D/g, "").slice(0, 6) || "000";
    case "user-comment":
      return normalizeExifText(customValue);
    case "int": {
      const number = parseFlexibleNumericInput(customValue);
      return Number.isFinite(number) ? Math.round(number) : resolveKeepMetadataRawValue(edit);
    }
    case "rational-number":
      return parseRationalValue(customValue) || resolveKeepMetadataRawValue(edit);
    case "rational-seconds":
      return parseExposureTimeValue(customValue) || resolveKeepMetadataRawValue(edit);
    case "gps-latitude":
    case "gps-longitude":
    case "gps-altitude": {
      const number = parseFlexibleNumericInput(customValue);
      return Number.isFinite(number) ? number : resolveKeepMetadataRawValue(edit);
    }
    case "gps-date":
      return normalizeEditorGpsDateInput(customValue);
    case "gps-time":
      return normalizeEditorGpsTimeInput(customValue);
    default:
      return normalizeExifText(customValue);
  }
}

function buildMetadataEditSession(options) {
  const randomDeviceNames = Object.keys(DEVICE_PRESETS).filter((name) => name !== options.deviceName);
  const randomDeviceName = pickRandomValue(randomDeviceNames, options.deviceName);

  return {
    randomDate: createRandomExifDate(),
    randomGps: createPreciseCoordinates(options.customLat, options.customLon, options.gpsName),
    selectedDeviceProfile: buildDeviceExifProfile(options.deviceName, options.imageWidth, options.imageHeight),
    randomDeviceProfile: buildDeviceExifProfile(randomDeviceName, options.imageWidth, options.imageHeight),
  };
}

function createRandomMetadataRawValue(edit, session, options) {
  const deviceProfile = session.coherentDeviceProfile || session.randomDeviceProfile || session.selectedDeviceProfile;

  switch (edit.randomType) {
    case "make":
      return deviceProfile?.make || "Apple";
    case "model":
      return deviceProfile?.model || "iPhone";
    case "lens-make":
      return deviceProfile?.lensMake || deviceProfile?.make || "Apple";
    case "lens-model":
      return deviceProfile?.lensModel || "main camera";
    case "software":
      return `Image Privacy Tool Workers ${randomHex(2)}`;
    case "host":
      return `local-browser-${randomHex(3)}`;
    case "serial":
    case "uuid":
      return randomHex(16);
    case "comment":
      return `nonce=${randomHex(8)}`;
    case "datetime":
      return formatExifDate(session.randomDate);
    case "timezone":
      return "+08:00";
    case "subsec":
      return String(randomInt(0, 999)).padStart(3, "0");
    case "fnumber":
      return deviceProfile?.fNumber || [178, 100];
    case "exposure-time":
      return deviceProfile?.exposureTime || [1, 120];
    case "iso":
      return deviceProfile?.iso || pickRandomValue([64, 80, 100, 125, 160, 200, 320], 80);
    case "focal-length":
      return deviceProfile?.focalLength || [686, 100];
    case "focal-35":
      return deviceProfile?.focalLengthIn35mmFilm || pickRandomValue([24, 26, 28, 35], 24);
    case "exposure-program":
      return pickRandomValue([1, 2, 3, 4], 2);
    case "exposure-mode":
      return pickRandomValue([0, 1, 2], 0);
    case "metering":
      return pickRandomValue([2, 3, 5], 5);
    case "white-balance":
      return pickRandomValue([0, 1], 0);
    case "flash":
      return pickRandomValue([0, 16], 0);
    case "scene":
      return pickRandomValue([0, 1, 2, 3], 0);
    case "zoom":
      return decimalToRational(1 + Math.random() * 0.12, 1000);
    case "sensing":
      return 2;
    case "exif-version":
      return "0232";
    case "color-space":
      return pickRandomValue([1, 65535], 65535);
    case "dimension-x":
      return options?.imageWidth || edit.currentValue || 0;
    case "dimension-y":
      return options?.imageHeight || edit.currentValue || 0;
    case "gps-latitude":
      return session.randomGps?.latitude ?? parseFlexibleNumericInput(edit.currentValue);
    case "gps-longitude":
      return session.randomGps?.longitude ?? parseFlexibleNumericInput(edit.currentValue);
    case "gps-altitude":
      return 8 + Math.random() * 60;
    case "gps-date":
      return formatExifDateStamp(session.randomDate);
    case "gps-time":
      return `${pad(randomInt(7, 22))}:${pad(randomInt(0, 59))}:${pad(randomInt(0, 59))}`;
    case "direction":
      return randomInt(0, 359);
    case "speed":
      return randomInt(0, 120);
    case "orientation":
      return 1;
    default: {
      const current = normalizeExifText(edit.currentValue);
      const numeric = parseFlexibleNumericInput(current);
      if (Number.isFinite(numeric)) {
        return Math.max(0, numeric + randomInt(1, 9));
      }
      if (/^[a-f0-9]{12,}$/i.test(current)) {
        return randomHex(Math.max(4, Math.ceil(current.length / 2))).slice(0, current.length);
      }
      if (/^\d{4}[:-]\d{2}[:-]\d{2}/.test(current)) {
        return formatExifDate(session.randomDate);
      }
      return current ? `${current}-${randomHex(2)}` : `meta-${randomHex(4)}`;
    }
  }
}

function resolveMetadataEditorEntries(options) {
  if (Array.isArray(options._resolvedMetadataEdits)) {
    return options._resolvedMetadataEdits;
  }

  if (!Array.isArray(options.metadataEdits) || !options.metadataEdits.length) {
    options._resolvedMetadataEdits = [];
    return options._resolvedMetadataEdits;
  }

  const session = options.metadataSession || buildMetadataEditSession(options);
  options.metadataSession = session;
  session.coherentDeviceProfile = chooseCoherentDeviceProfile(options.metadataEdits, session, options);

  options._resolvedMetadataEdits = options.metadataEdits.map((edit) => {
    let rawValue;
    if (edit.mode === "custom") {
      rawValue = resolveCustomMetadataRawValue(edit);
    } else if (edit.mode === "random") {
      rawValue = createRandomMetadataRawValue(edit, session, options);
    } else {
      rawValue = resolveKeepMetadataRawValue(edit);
    }

    const resolvedText = formatResolvedMetadataText(edit, rawValue, edit.customValue || edit.currentValue);
    return {
      ...edit,
      resolvedRawValue: rawValue,
      resolvedText,
    };
  });

  return options._resolvedMetadataEdits;
}

function applyMetadataEditorEditsToExif(exif, options, meta) {
  const edits = resolveMetadataEditorEntries(options);
  if (!edits.length) {
    return;
  }

  const gpsState = {
    latitude: meta.preciseGps?.latitude ?? null,
    longitude: meta.preciseGps?.longitude ?? null,
    altitude: null,
    dateStamp: "",
    timeStamp: "",
  };

  edits.forEach((edit) => {
    if (!edit.support.canWriteExif) {
      return;
    }

    if (edit.groupKey === "gps") {
      switch (edit.key) {
        case "Latitude":
          gpsState.latitude = Number(edit.resolvedRawValue);
          break;
        case "Longitude":
          gpsState.longitude = Number(edit.resolvedRawValue);
          break;
        case "Altitude":
          gpsState.altitude = Number(edit.resolvedRawValue);
          break;
        case "GPSDateStamp":
          gpsState.dateStamp = normalizeEditorGpsDateInput(edit.resolvedRawValue);
          break;
        case "GPSTimeStamp":
          gpsState.timeStamp = normalizeEditorGpsTimeInput(edit.resolvedRawValue);
          break;
        default:
          break;
      }
      return;
    }

    const config = EXIF_EDITOR_CONFIGS[edit.key];
    const tagId = config?.tag?.();
    if (!config || !tagId) {
      return;
    }

    let exifValue = edit.resolvedRawValue;
    if (config.valueType === "user-comment") {
      exifValue = `ASCII\0\0\0${normalizeExifText(edit.resolvedRawValue)}`;
    }

    if (exifValue == null || exifValue === "") {
      return;
    }

    exif[config.ifd][tagId] = exifValue;
  });

  if (Number.isFinite(gpsState.latitude) && Number.isFinite(gpsState.longitude)) {
    exif.GPS[piexif.GPSIFD.GPSLatitudeRef] = gpsState.latitude >= 0 ? "N" : "S";
    exif.GPS[piexif.GPSIFD.GPSLatitude] = decimalToRationalArray(gpsState.latitude);
    exif.GPS[piexif.GPSIFD.GPSLongitudeRef] = gpsState.longitude >= 0 ? "E" : "W";
    exif.GPS[piexif.GPSIFD.GPSLongitude] = decimalToRationalArray(gpsState.longitude);
    meta.preciseGps = {
      latitude: gpsState.latitude,
      longitude: gpsState.longitude,
      label: "元数据编辑器",
      jitterMeters: 0,
    };
  }

  if (Number.isFinite(gpsState.altitude) && piexif.GPSIFD.GPSAltitude) {
    exif.GPS[piexif.GPSIFD.GPSAltitudeRef] = gpsState.altitude >= 0 ? 0 : 1;
    exif.GPS[piexif.GPSIFD.GPSAltitude] = decimalToRational(Math.abs(gpsState.altitude), 10);
  }
  if (gpsState.dateStamp && piexif.GPSIFD.GPSDateStamp) {
    exif.GPS[piexif.GPSIFD.GPSDateStamp] = gpsState.dateStamp;
  }
  if (gpsState.timeStamp && piexif.GPSIFD.GPSTimeStamp) {
    const [hours = "0", minutes = "0", seconds = "0"] = gpsState.timeStamp.split(":");
    exif.GPS[piexif.GPSIFD.GPSTimeStamp] = [
      [Number(hours), 1],
      [Number(minutes), 1],
      [Number(seconds), 1],
    ];
  }

  const pickResolved = (groupKey, key) =>
    edits.find((edit) => edit.groupKey === groupKey && edit.key === key)?.resolvedText || "";

  const deviceSummary = [pickResolved("exif", "Make"), pickResolved("exif", "Model")].filter(Boolean).join(" / ");
  if (deviceSummary) {
    meta.deviceSummary = deviceSummary;
  }

  const lensSummary = [pickResolved("exif", "LensMake"), pickResolved("exif", "LensModel")].filter(Boolean).join(" / ");
  if (lensSummary) {
    meta.lensSummary = lensSummary;
  }

  const resolvedTime =
    pickResolved("exif", "DateTimeOriginal") ||
    pickResolved("exif", "DateTimeDigitized") ||
    pickResolved("exif", "DateTime");
  if (resolvedTime) {
    meta.exifTime = resolvedTime;
  }

  if (edits.length) {
    meta.stealthSummary = [meta.stealthSummary, `逐项改写 ${edits.length} 项`].filter(Boolean).join(" / ");
  }
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function sanitizeMetadataXmpName(groupKey, tagKey) {
  const merged = `${groupKey}_${tagKey}`.replace(/[^A-Za-z0-9_.-]/g, "_");
  return /^[A-Za-z_]/.test(merged) ? merged : `m_${merged}`;
}

function buildMetadataXmpPayload(options) {
  if (options.stripExif || options.effectiveOutputFormat !== "JPEG") {
    return { xml: "", count: 0, warning: "" };
  }

  const edits = resolveMetadataEditorEntries(options).filter(
    (edit) => edit.support.canMirrorXmp && edit.resolvedText
  );
  if (!edits.length) {
    return { xml: "", count: 0, warning: "" };
  }

  const deduped = new Map();
  edits.forEach((edit) => {
    deduped.set(sanitizeMetadataXmpName(edit.groupKey, edit.key), edit.resolvedText);
  });

  if (options.randomizeMetadata) {
    deduped.set("sessionNonce", randomHex(8));
  }

  let entries = Array.from(deduped.entries());
  const composeXml = (pairs) => `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about="" xmlns:imgmeta="https://imgmeta.xyn/static/1.0/">
      ${pairs.map(([name, value]) => `<imgmeta:${name}>${escapeXml(value)}</imgmeta:${name}>`).join("\n      ")}
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;

  let xml = composeXml(entries);
  const headerBytes = new TextEncoder().encode("http://ns.adobe.com/xap/1.0/\0");
  let warning = "";
  if (headerBytes.length + new TextEncoder().encode(xml).length + 4 > 65535) {
    const prioritized = entries.filter(([name]) => name === "sessionNonce").concat(entries.filter(([name]) => name !== "sessionNonce").slice(0, 120));
    xml = composeXml(prioritized);
    warning = "XMP 标签过多，已自动压缩为重点字段写入。";
    entries = prioritized;
  }

  return {
    xml,
    count: entries.length,
    warning,
  };
}

function buildJpegApp1Segment(payloadBytes) {
  const length = payloadBytes.length + 2;
  if (length > 65535) {
    throw new Error("XMP payload too large for single JPEG APP1 segment");
  }
  const segment = new Uint8Array(payloadBytes.length + 4);
  segment[0] = 0xff;
  segment[1] = 0xe1;
  segment[2] = (length >> 8) & 0xff;
  segment[3] = length & 0xff;
  segment.set(payloadBytes, 4);
  return segment;
}

async function injectJpegXmpBlob(blob, xml) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  const xmpHeader = new TextEncoder().encode("http://ns.adobe.com/xap/1.0/\0");
  const xmpPayload = new Uint8Array(xmpHeader.length + new TextEncoder().encode(xml).length);
  xmpPayload.set(xmpHeader, 0);
  xmpPayload.set(new TextEncoder().encode(xml), xmpHeader.length);
  const xmpSegment = buildJpegApp1Segment(xmpPayload);

  const chunks = [bytes.subarray(0, 2)];
  let cursor = 2;

  while (cursor + 4 <= bytes.length) {
    if (bytes[cursor] !== 0xff) {
      break;
    }

    const marker = bytes[cursor + 1];
    if (marker === 0xda || marker === 0xd9) {
      break;
    }

    if ((marker >= 0xd0 && marker <= 0xd7) || marker === 0x01) {
      chunks.push(bytes.subarray(cursor, cursor + 2));
      cursor += 2;
      continue;
    }

    const length = (bytes[cursor + 2] << 8) | bytes[cursor + 3];
    if (!length) {
      break;
    }

    const next = cursor + 2 + length;
    const segment = bytes.subarray(cursor, next);
    const isExistingXmp =
      marker === 0xe1 &&
      segment.length >= xmpHeader.length + 4 &&
      segment.subarray(4, 4 + xmpHeader.length).every((value, index) => value === xmpHeader[index]);

    if (!isExistingXmp) {
      chunks.push(segment);
    }
    cursor = next;
  }

  chunks.push(xmpSegment);
  chunks.push(bytes.subarray(cursor));
  return new Blob(chunks, { type: "image/jpeg" });
}

async function maybeInjectXmp(blob, outputFormat, options) {
  if (outputFormat !== "JPEG" || options.stripExif) {
    return {
      blob,
      xmpApplied: false,
      xmpCount: 0,
      warning: "",
    };
  }

  const payload = buildMetadataXmpPayload(options);
  if (!payload.xml) {
    return {
      blob,
      xmpApplied: false,
      xmpCount: 0,
      warning: payload.warning,
    };
  }

  return {
    blob: await injectJpegXmpBlob(blob, payload.xml),
    xmpApplied: true,
    xmpCount: payload.count,
    warning: payload.warning,
  };
}

function buildExifPayload(options) {
  if (options.stripExif || typeof piexif === "undefined") {
    return null;
  }

  const exif = { "0th": {}, Exif: {}, GPS: {}, "1st": {}, thumbnail: null };
  const meta = {
    preciseGps: null,
    exifTime: "",
    deviceSummary: "",
    lensSummary: "",
    stealthSummary: "",
  };
  const stealthEntries = [];
  let exifDate = null;

  const deviceProfile = buildDeviceExifProfile(
    options.deviceName,
    options.imageWidth,
    options.imageHeight
  );
  if (deviceProfile) {
    exif["0th"][piexif.ImageIFD.Make] = deviceProfile.make;
    exif["0th"][piexif.ImageIFD.Model] = deviceProfile.model;
    if (piexif.ImageIFD.Software) {
      exif["0th"][piexif.ImageIFD.Software] = options.randomExtraExif
        ? `Image Privacy Tool Workers ${randomHex(2)}`
        : "Image Privacy Tool Workers";
    }
    if (piexif.ImageIFD.Orientation) {
      exif["0th"][piexif.ImageIFD.Orientation] = 1;
    }
    if (piexif.ExifIFD.LensMake) {
      exif.Exif[piexif.ExifIFD.LensMake] = deviceProfile.lensMake;
    }
    if (piexif.ExifIFD.LensModel) {
      exif.Exif[piexif.ExifIFD.LensModel] = deviceProfile.lensModel;
    }
    if (piexif.ExifIFD.FocalLength) {
      exif.Exif[piexif.ExifIFD.FocalLength] = deviceProfile.focalLength;
    }
    if (piexif.ExifIFD.FocalLengthIn35mmFilm) {
      exif.Exif[piexif.ExifIFD.FocalLengthIn35mmFilm] = deviceProfile.focalLengthIn35mmFilm;
    }
    if (piexif.ExifIFD.FNumber) {
      exif.Exif[piexif.ExifIFD.FNumber] = deviceProfile.fNumber;
    }
    if (piexif.ExifIFD.ExposureTime) {
      exif.Exif[piexif.ExifIFD.ExposureTime] = deviceProfile.exposureTime;
    }
    const isoTag = piexif.ExifIFD.PhotographicSensitivity || piexif.ExifIFD.ISOSpeedRatings;
    if (isoTag) {
      exif.Exif[isoTag] = deviceProfile.iso;
    }
    if (piexif.ExifIFD.ExposureProgram) {
      exif.Exif[piexif.ExifIFD.ExposureProgram] = 2;
    }
    if (piexif.ExifIFD.ExposureMode) {
      exif.Exif[piexif.ExifIFD.ExposureMode] = 0;
    }
    if (piexif.ExifIFD.MeteringMode) {
      exif.Exif[piexif.ExifIFD.MeteringMode] = 5;
    }
    if (piexif.ExifIFD.WhiteBalance) {
      exif.Exif[piexif.ExifIFD.WhiteBalance] = 0;
    }
    if (piexif.ExifIFD.Flash) {
      exif.Exif[piexif.ExifIFD.Flash] = 0;
    }
    if (piexif.ExifIFD.SceneCaptureType) {
      exif.Exif[piexif.ExifIFD.SceneCaptureType] = 0;
    }
    if (piexif.ExifIFD.DigitalZoomRatio) {
      exif.Exif[piexif.ExifIFD.DigitalZoomRatio] = decimalToRational(1 + Math.random() * 0.05, 1000);
    }
    if (piexif.ExifIFD.SensingMethod) {
      exif.Exif[piexif.ExifIFD.SensingMethod] = 2;
    }
    if (piexif.ExifIFD.ExifVersion) {
      exif.Exif[piexif.ExifIFD.ExifVersion] = "0232";
    }
    if (piexif.ExifIFD.ColorSpace) {
      exif.Exif[piexif.ExifIFD.ColorSpace] = 65535;
    }
    if (piexif.ExifIFD.PixelXDimension && deviceProfile.imageWidth) {
      exif.Exif[piexif.ExifIFD.PixelXDimension] = deviceProfile.imageWidth;
    }
    if (piexif.ExifIFD.PixelYDimension && deviceProfile.imageHeight) {
      exif.Exif[piexif.ExifIFD.PixelYDimension] = deviceProfile.imageHeight;
    }
    meta.deviceSummary = `${deviceProfile.make} / ${deviceProfile.model}`;
    meta.lensSummary = `${deviceProfile.lensMake} / ${deviceProfile.lensModel}`;
  }

  const preciseGps = createPreciseCoordinates(options.customLat, options.customLon, options.gpsName);
  if (preciseGps) {
    exif.GPS[piexif.GPSIFD.GPSLatitudeRef] = preciseGps.latitude >= 0 ? "N" : "S";
    exif.GPS[piexif.GPSIFD.GPSLatitude] = decimalToRationalArray(preciseGps.latitude);
    exif.GPS[piexif.GPSIFD.GPSLongitudeRef] = preciseGps.longitude >= 0 ? "E" : "W";
    exif.GPS[piexif.GPSIFD.GPSLongitude] = decimalToRationalArray(preciseGps.longitude);
    meta.preciseGps = preciseGps;

    if (options.randomExtraExif) {
      if (piexif.GPSIFD.GPSAltitudeRef) {
        exif.GPS[piexif.GPSIFD.GPSAltitudeRef] = 0;
      }
      if (piexif.GPSIFD.GPSAltitude) {
        exif.GPS[piexif.GPSIFD.GPSAltitude] = decimalToRational(8 + Math.random() * 60, 10);
      }
      if (piexif.GPSIFD.GPSImgDirectionRef) {
        exif.GPS[piexif.GPSIFD.GPSImgDirectionRef] = "T";
      }
      if (piexif.GPSIFD.GPSImgDirection) {
        exif.GPS[piexif.GPSIFD.GPSImgDirection] = decimalToRational(Math.random() * 360, 100);
      }
      if (piexif.GPSIFD.GPSProcessingMethod) {
        exif.GPS[piexif.GPSIFD.GPSProcessingMethod] = "ASCII\0\0\0NETWORK";
      }
      stealthEntries.push("GPS附加方向/高度");
    }
  }

  let note = options.hiddenNote.trim();
  if (options.randomizeMetadata) {
    note = `${note} nonce=${randomHex(8)}`.trim();
  }
  if (note) {
    exif.Exif[piexif.ExifIFD.UserComment] = `ASCII\0\0\0${note}`;
  }

  if (options.randomTimestamp) {
    exifDate = createRandomExifDate();
    const exifTime = formatExifDate(exifDate);
    exif["0th"][piexif.ImageIFD.DateTime] = exifTime;
    exif.Exif[piexif.ExifIFD.DateTimeOriginal] = exifTime;
    exif.Exif[piexif.ExifIFD.DateTimeDigitized] = exifTime;
    if (piexif.ExifIFD.OffsetTime) {
      exif.Exif[piexif.ExifIFD.OffsetTime] = "+08:00";
    }
    if (piexif.ExifIFD.OffsetTimeOriginal) {
      exif.Exif[piexif.ExifIFD.OffsetTimeOriginal] = "+08:00";
    }
    if (piexif.ExifIFD.OffsetTimeDigitized) {
      exif.Exif[piexif.ExifIFD.OffsetTimeDigitized] = "+08:00";
    }
    meta.exifTime = exifTime;
  }

  if (options.randomExtraExif) {
    const subSec = String(randomInt(0, 999)).padStart(3, "0");
    if (piexif.ImageIFD.HostComputer) {
      exif["0th"][piexif.ImageIFD.HostComputer] = `local-browser-${randomHex(3)}`;
    }
    if (piexif.ExifIFD.ImageUniqueID) {
      exif.Exif[piexif.ExifIFD.ImageUniqueID] = randomHex(16);
    }
    if (piexif.ExifIFD.SubSecTime) {
      exif.Exif[piexif.ExifIFD.SubSecTime] = subSec;
    }
    if (piexif.ExifIFD.SubSecTimeOriginal) {
      exif.Exif[piexif.ExifIFD.SubSecTimeOriginal] = subSec;
    }
    if (piexif.ExifIFD.SubSecTimeDigitized) {
      exif.Exif[piexif.ExifIFD.SubSecTimeDigitized] = subSec;
    }

    const gpsDate = exifDate || createRandomExifDate();
    if (piexif.GPSIFD.GPSDateStamp) {
      exif.GPS[piexif.GPSIFD.GPSDateStamp] = formatExifDateStamp(gpsDate);
    }
    if (piexif.GPSIFD.GPSTimeStamp) {
      exif.GPS[piexif.GPSIFD.GPSTimeStamp] = buildGpsTimeStamp(gpsDate);
    }

    stealthEntries.push("亚秒时间");
    stealthEntries.push("唯一ID");
  }

  meta.stealthSummary = stealthEntries.join(" / ");
  applyMetadataEditorEditsToExif(exif, options, meta);

  return {
    exifBytes: piexif.dump(exif),
    meta,
  };
}

async function maybeInjectExif(blob, outputFormat, options) {
  if (outputFormat !== "JPEG") {
    return {
      blob,
      exifApplied: false,
      warning: "当前静态部署版只对 JPEG 输出稳定写入 EXIF。",
      preciseGps: null,
      exifTime: "",
      deviceSummary: "",
      lensSummary: "",
      stealthSummary: "",
    };
  }

  if (options.stripExif) {
    return {
      blob,
      exifApplied: false,
      warning: "",
      preciseGps: null,
      exifTime: "",
      deviceSummary: "",
      lensSummary: "",
      stealthSummary: "",
    };
  }

  if (typeof piexif === "undefined") {
    return {
      blob,
      exifApplied: false,
      warning: "piexifjs 未加载成功，已跳过 EXIF 写入。",
      preciseGps: null,
      exifTime: "",
      deviceSummary: "",
      lensSummary: "",
      stealthSummary: "",
    };
  }

  const payload = buildExifPayload(options);
  if (!payload) {
    return {
      blob,
      exifApplied: false,
      warning: "",
      preciseGps: null,
      exifTime: "",
      deviceSummary: "",
      lensSummary: "",
      stealthSummary: "",
    };
  }

  const dataUrl = await blobToDataUrl(blob);
  const injected = piexif.insert(payload.exifBytes, dataUrl);
  return {
    blob: dataUrlToBlob(injected),
    exifApplied: true,
    warning: "",
    preciseGps: payload.meta.preciseGps,
    exifTime: payload.meta.exifTime,
    deviceSummary: payload.meta.deviceSummary,
    lensSummary: payload.meta.lensSummary,
    stealthSummary: payload.meta.stealthSummary,
  };
}

async function processSingleFile(file, options) {
  const srcBuffer = await file.arrayBuffer();
  const srcSha = await sha256Hex(srcBuffer);
  const sourceFormat = sniffImageFormat(srcBuffer, file.type, file.name);
  const sourceMetadata = readSourceTiffData(srcBuffer);
  const bitmap = await loadBitmap(file, srcBuffer, sourceFormat);
  let sourceCanvas = renderSourceToCanvas(bitmap, sourceFormat.outputFormat);
  const sourceUrl = await createPreviewUrlFromCanvas(sourceCanvas);
  if (bitmap.close) {
    bitmap.close();
  }

  const srcPHash = computePHash(sourceCanvas);

  if (options.microResample) {
    sourceCanvas = applyMicroResample(sourceCanvas, options.effectiveOutputFormat);
  }

  const phashVariant = await findBestPhashVariant(sourceCanvas, srcPHash, options);
  const workingCanvas = phashVariant.workingCanvas;

  const effectiveOptions = {
    ...options,
    imageWidth: workingCanvas.width,
    imageHeight: workingCanvas.height,
  };
  effectiveOptions.metadataSession = buildMetadataEditSession(effectiveOptions);

  let outputBlob = phashVariant.outputBlob;
  const exifOutcome = await maybeInjectExif(outputBlob, options.effectiveOutputFormat, effectiveOptions);
  outputBlob = exifOutcome.blob;
  const xmpOutcome = await maybeInjectXmp(outputBlob, options.effectiveOutputFormat, effectiveOptions);
  outputBlob = xmpOutcome.blob;

  const dstBuffer = await outputBlob.arrayBuffer();
  const dstSha = await sha256Hex(dstBuffer);
  const outputCanvas = await imageFromBlob(outputBlob);
  const dstPHash = computePHash(outputCanvas);

  const outputName = buildOutputNameWithOptions(file.name, options.effectiveOutputFormat, options);
  const outputUrl = URL.createObjectURL(outputBlob);
  const hashChanged = srcSha !== dstSha;
  const phashChanged = srcPHash !== dstPHash;
  const phashDistance = phashHammingDistance(srcPHash, dstPHash);

  const summaryLines = [
    `源格式 : ${sourceMetadata.sourceContainerLabel || sourceFormat.label}`,
    `输出文件 : ${outputName}`,
    `请求格式 : ${options.outputFormat}`,
    `实际格式 : ${options.effectiveOutputFormat}${options.forcedAppleCompatibleJpeg ? " (为苹果兼容元数据自动切换)" : ""}`,
    `源 SHA256 : ${srcSha}`,
    `新 SHA256 : ${dstSha}`,
    `  -> ${hashChanged ? "已改变" : "未改变"}`,
    `源 pHash  : ${srcPHash}`,
    `新 pHash  : ${dstPHash}`,
    `  -> ${phashChanged ? "已改变" : "未改变"}`,
    `pHash 距离 : ${phashDistance} bit`,
  ];

  if (options.tweakPhash) {
    summaryLines.push(`pHash 策略 : ${phashVariant.tweakLabel}`);
  }
  if (options.microResample) {
    summaryLines.push("微缩放重采样 : 已启用");
  }
  if (options.randomizeFileName) {
    summaryLines.push("随机文件名尾缀 : 已启用");
  }

  if (exifOutcome.deviceSummary) {
    summaryLines.push(`写入设备 : ${exifOutcome.deviceSummary}`);
  }
  if (exifOutcome.lensSummary) {
    summaryLines.push(`写入镜头 : ${exifOutcome.lensSummary}`);
  }
  if (exifOutcome.stealthSummary) {
    summaryLines.push(`附加隐藏字段 : ${exifOutcome.stealthSummary}`);
  }
  if (xmpOutcome.xmpApplied) {
    summaryLines.push(`XMP 镜像 : 已写入 ${xmpOutcome.xmpCount} 项`);
  }
  if (exifOutcome.preciseGps) {
    summaryLines.push(
      `写入坐标 : ${formatCoordinate(exifOutcome.preciseGps.latitude)}, ${formatCoordinate(exifOutcome.preciseGps.longitude)}`
    );
  }
  if (exifOutcome.exifTime) {
    summaryLines.push(`写入时间 : ${exifOutcome.exifTime}`);
    summaryLines.push("说明 : 网页版只能改 EXIF 拍摄时间，不能改系统文件最后修改时间。");
  }

  const warnings = [];
  if (options.forcedAppleCompatibleJpeg) {
    warnings.push(`已自动从 ${options.outputFormat} 改为 JPEG，以写入苹果更容易识别的设备 / 镜头 / GPS / 时间信息。`);
  }
  if (sourceMetadata.sourceContainerLabel === "DNG") {
    warnings.push("源文件是 DNG / RAW 容器，本站会导出新的 JPEG / PNG / WEBP 副本，不会原位改写原始 raw 容器标签。");
  }
  if (options.tweakPhash && !phashChanged) {
    warnings.push("已尝试多轮随机扰动和低频扰动，但当前图片在这个输出格式/质量下 pHash 仍未变化。");
  }
  if (options.randomExtraExif && exifOutcome.stealthSummary) {
    warnings.push(`已额外改写隐藏 EXIF 字段: ${exifOutcome.stealthSummary}。`);
  }
  if (exifOutcome.warning) {
    warnings.push(exifOutcome.warning);
  }
  if (xmpOutcome.warning) {
    warnings.push(xmpOutcome.warning);
  }
  if (exifOutcome.exifTime) {
    warnings.push("苹果设备里看到的系统“最后修改时间”不会被网页改写，变化的是 EXIF 拍摄时间。");
  }

  return {
    originalName: file.name,
    outputName,
    sourceUrl,
    outputUrl,
    outputBlob,
    hashChanged,
    phashChanged,
    summary: summaryLines.join("\n"),
    warning: warnings.join(" "),
    exifApplied: exifOutcome.exifApplied,
    preciseGps: exifOutcome.preciseGps,
    exifTime: exifOutcome.exifTime,
    deviceSummary: exifOutcome.deviceSummary,
    lensSummary: exifOutcome.lensSummary,
    stealthSummary: exifOutcome.stealthSummary,
    xmpApplied: xmpOutcome.xmpApplied,
    xmpCount: xmpOutcome.xmpCount,
    selectedOutputFormat: options.outputFormat,
    effectiveOutputFormat: options.effectiveOutputFormat,
    forcedAppleCompatibleJpeg: options.forcedAppleCompatibleJpeg,
    phashDistance,
    phashTweakLabel: phashVariant.tweakLabel,
    microResample: options.microResample,
    randomizeFileName: options.randomizeFileName,
    randomExtraExif: options.randomExtraExif,
  };
}

function releaseProcessedItems(items) {
  items.forEach((item) => {
    if (item.sourceUrl) {
      URL.revokeObjectURL(item.sourceUrl);
    }
    if (item.outputUrl) {
      URL.revokeObjectURL(item.outputUrl);
    }
  });
}

function renderEmptyState() {
  dom.results.innerHTML = `
    <div class="empty-state">
      <strong>还没有处理结果</strong>
      <span>选图后点击“开始处理”，结果会出现在这里。</span>
    </div>
  `;
}

function renderResults(items) {
  if (items.length === 0) {
    renderEmptyState();
    return;
  }

  dom.results.innerHTML = items
    .map((item) => {
      const metaPills = [
        `<span class="hash-pill">SHA256 ${item.hashChanged ? "已变化" : "未变化"}</span>`,
        `<span class="hash-pill">pHash ${item.phashChanged ? "已变化" : "未变化"}</span>`,
        `<span class="hash-pill">pHash 距离 ${escapeHtml(item.phashDistance)} bit</span>`,
        `<span class="hash-pill">${item.exifApplied ? "已写入 EXIF" : "未写入 EXIF"}</span>`,
        `<span class="hash-pill">格式 ${escapeHtml(item.effectiveOutputFormat)}</span>`,
      ];

      if (item.microResample) {
        metaPills.push(`<span class="hash-pill">微重采样 已启用</span>`);
      }
      if (item.randomizeFileName) {
        metaPills.push(`<span class="hash-pill">随机文件尾缀 已启用</span>`);
      }
      if (item.deviceSummary) {
        metaPills.push(`<span class="hash-pill">设备 ${escapeHtml(item.deviceSummary)}</span>`);
      }
      if (item.lensSummary) {
        metaPills.push(`<span class="hash-pill">镜头 ${escapeHtml(item.lensSummary)}</span>`);
      }
      if (item.stealthSummary) {
        metaPills.push(`<span class="hash-pill">隐藏字段 ${escapeHtml(item.stealthSummary)}</span>`);
      }
      if (item.preciseGps) {
        metaPills.push(
          `<span class="hash-pill">GPS ${escapeHtml(formatCoordinate(item.preciseGps.latitude))}, ${escapeHtml(formatCoordinate(item.preciseGps.longitude))}</span>`
        );
      }
      if (item.exifTime) {
        metaPills.push(`<span class="hash-pill">时间 ${escapeHtml(item.exifTime)}</span>`);
      }
      if (item.xmpApplied) {
        metaPills.push(`<span class="hash-pill">XMP ${escapeHtml(item.xmpCount)} 项</span>`);
      }

      return `
        <article class="result-card">
          <div class="result-head">
            <div>
              <h3>${escapeHtml(item.originalName)}</h3>
              <p>${item.warning ? escapeHtml(item.warning) : "处理完成，可直接下载。"}</p>
            </div>
            <a class="download-link" href="${item.outputUrl}" download="${escapeHtml(item.outputName)}">下载文件</a>
          </div>
          <div class="preview-grid">
            <div class="preview-panel">
              <span>原图</span>
              <img src="${item.sourceUrl}" alt="原图预览">
            </div>
            <div class="preview-panel">
              <span>处理后</span>
              <img src="${item.outputUrl}" alt="结果预览">
            </div>
          </div>
          <div class="meta-list">
            ${metaPills.join("")}
          </div>
          <pre class="summary">${escapeHtml(item.summary)}</pre>
        </article>
      `;
    })
    .join("");
}

function collectOptions() {
  const customLat = dom.customLat.value.trim();
  const customLon = dom.customLon.value.trim();

  if ((customLat && !customLon) || (!customLat && customLon)) {
    throw new Error("如果使用自定义坐标，请同时填写纬度和经度。");
  }
  if (customLat && Number.isNaN(Number(customLat))) {
    throw new Error("自定义纬度不是合法数字。");
  }
  if (customLon && Number.isNaN(Number(customLon))) {
    throw new Error("自定义经度不是合法数字。");
  }

  const stripExif = dom.stripExif.checked;
  const outputFormat = dom.outputFormat.value;
  const metadataEdits = dom.images.files.length === 1 ? collectMetadataEditorEdits() : [];
  const forcedAppleCompatibleJpeg = shouldForceAppleCompatibleJpeg({
    stripExif,
    outputFormat,
  });

  return {
    gpsName: dom.gpsName.value,
    deviceName: dom.deviceName.value,
    customLat,
    customLon,
    hiddenNote: dom.hiddenNote.value,
    tweakPhash: dom.tweakPhash.checked,
    microResample: dom.microResample.checked,
    randomizeMetadata: dom.randomizeMetadata.checked,
    randomExtraExif: dom.randomExtraExif.checked,
    randomTimestamp: dom.randomTimestamp.checked,
    stripExif,
    randomizeFileName: dom.randomizeFileName.checked,
    outputFormat,
    effectiveOutputFormat: forcedAppleCompatibleJpeg ? APPLE_METADATA_OUTPUT_FORMAT : outputFormat,
    forcedAppleCompatibleJpeg,
    quality: clamp(Number(dom.quality.value), 50, 100),
    metadataEdits,
  };
}

async function downloadAllAsZip() {
  if (processedItems.length === 0 || typeof JSZip === "undefined") {
    setGlobalMessage("当前没有可打包下载的结果，或者 JSZip 未加载成功。", "error");
    return;
  }

  dom.downloadAllBtn.disabled = true;
  try {
    const zip = new JSZip();
    processedItems.forEach((item) => {
      zip.file(item.outputName, item.outputBlob);
    });
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "image-privacy-tool-results.zip";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    setGlobalMessage(`打包下载失败：${error.message}`, "error");
  } finally {
    dom.downloadAllBtn.disabled = isBusy || processedItems.length === 0;
  }
}

function downloadSingleResult() {
  if (processedItems.length !== 1) {
    return;
  }
  const item = processedItems[0];
  const link = document.createElement("a");
  link.href = item.outputUrl;
  link.download = item.outputName;
  link.click();
}

async function handleSubmit(event) {
  event.preventDefault();
  if (isBusy) {
    return;
  }

  if (!dom.images.files.length) {
    setGlobalMessage("请先选择至少一张图片。", "error");
    return;
  }

  let options;
  try {
    options = collectOptions();
  } catch (error) {
    setGlobalMessage(error.message, "error");
    return;
  }

  if (options.forcedAppleCompatibleJpeg) {
    setGlobalMessage(
      `你选择了 ${options.outputFormat}，但为了写入苹果更容易识别的设备 / 镜头 / GPS / 时间信息，实际会导出为 JPEG。网页版不会改系统文件最后修改时间，只会写 EXIF 拍摄时间。`
    );
  } else if (options.stripExif && options.metadataEdits.length) {
    setGlobalMessage("你勾选了“清除全部 EXIF”，所以左侧逐项元数据改写会被跳过；如果要写回这些标签，请先关闭这个选项。");
  } else {
    setGlobalMessage("");
  }
  releaseProcessedItems(processedItems);
  processedItems = [];
  renderEmptyState();
  setBusy(true);
  setProgress(0, dom.images.files.length, "准备开始处理");

  const files = Array.from(dom.images.files);
  const nextItems = [];

  try {
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      setProgress(index, files.length, `正在处理 ${index + 1}/${files.length}: ${file.name}`);
      const result = await processSingleFile(file, options);
      nextItems.push(result);
      renderResults(nextItems);
    }

    processedItems = nextItems;
    dom.downloadAllBtn.disabled = processedItems.length === 0;
    dom.downloadSingleBtn.hidden = processedItems.length !== 1;
    dom.downloadSingleBtn.disabled = processedItems.length !== 1;
    setProgress(files.length, files.length, `处理完成，共 ${processedItems.length} 个文件`);
    setGlobalMessage(
      options.forcedAppleCompatibleJpeg
        ? "全部处理完成：已自动按 JPEG 导出，并补了苹果更容易识别的设备 / 镜头 / 时间信息。注意，网页版只能改 EXIF 拍摄时间，不能改系统最后修改时间。"
        : "全部处理完成，可以一键下载结果图或打包下载。"
    );
  } catch (error) {
    releaseProcessedItems(nextItems);
    setGlobalMessage(`处理失败：${error.message}`, "error");
    setProgress(0, 1, "处理失败");
  } finally {
    setBusy(false);
  }
}

function init() {
  populateSelect(dom.gpsName, Object.keys(GPS_PRESETS), "中国·北京");
  populateSelect(dom.deviceName, Object.keys(DEVICE_PRESETS), "Apple iPhone 15 Pro");
  renderEmptyState();
  renderSourceInsightsEmpty();
  renderMetadataEditorEmpty("先上传单张图片完成检测，左侧才会出现逐项随机和自定义入口。");
  setSourceStatus("等待上传", "idle");
  applyPreset("balanced", { persist: false });
  restoreSettings();
  updateFileCount();
  bindDropZone();

  dom.images.addEventListener("change", () => {
    updateFileCount();
    void scanSelectedFiles();
    saveSettings();
  });
  dom.quality.addEventListener("input", () => {
    updateQualityLabel();
    renderPresetState(null);
    saveSettings();
  });
  dom.form.addEventListener("change", (event) => {
    if (event.target?.matches?.("[data-preset]")) {
      return;
    }
    if (event.target !== dom.quality) {
      renderPresetState(null);
      saveSettings();
    }
  });
  dom.form.addEventListener("input", (event) => {
    if (event.target === dom.hiddenNote || event.target === dom.customLat || event.target === dom.customLon) {
      renderPresetState(null);
      saveSettings();
    }
  });
  dom.form.addEventListener("submit", handleSubmit);
  dom.downloadAllBtn.addEventListener("click", downloadAllAsZip);
  dom.downloadSingleBtn.addEventListener("click", downloadSingleResult);
  dom.metadataEditor?.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-metadata-action]");
    if (actionButton) {
      applyMetadataBatchAction(actionButton.dataset.metadataAction);
      return;
    }

    const modeButton = event.target.closest(".editor-mode-chip");
    if (!modeButton) {
      return;
    }

    const rowElement = modeButton.closest(".editor-row");
    setMetadataEditorMode(rowElement, modeButton.dataset.mode || "keep");
  });
  dom.metadataSearch?.addEventListener("input", (event) => {
    filterMetadataEditorRows(event.target.value || "");
  });
  dom.presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyPreset(button.dataset.preset);
      setGlobalMessage(`${PRESET_CONFIGS[button.dataset.preset].label} 已套用。`);
    });
  });
  dom.resetSettingsBtn?.addEventListener("click", resetSettings);
}

init();
