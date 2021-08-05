diff --git a/libs/cameraThread/snapshot.js b/libs/cameraThread/snapshot.js
index e165750..740dc0d 100644
--- a/libs/cameraThread/snapshot.js
+++ b/libs/cameraThread/snapshot.js
@@ -42,6 +42,45 @@ const temporaryImageFile = jsonData.temporaryImageFile
 const iconImageFile = jsonData.iconImageFile
 const useIcon = jsonData.useIcon
 const rawMonitorConfig = jsonData.rawMonitorConfig
+
+// Take third .ts file, instead of m3u8
+//
+
+ffmpegCommandString.forEach((line) => {
+
+  if ( line.includes('detectorStream.m3u8')) {
+
+       try {
+               const data = fs.readFileSync(line, 'utf8');
+
+               var toReplace = ''
+               var count = 0
+
+               const lines = data.split(/\r?\n/);
+
+               lines.forEach((fileline) => {
+
+                       if (fileline.includes('.ts')) {
+                               count++
+                               if (count == 1) {
+                                       toReplace = fileline;
+                               }
+                       }
+               });
+
+               if (toReplace != '') {
+                       const index = ffmpegCommandString.indexOf(line);
+                       ffmpegCommandString[index] = ffmpegCommandString[index].replace('detectorStream.m3u8', toReplace)
+               }
+       }
+       catch (err) {
+               console.log(err)
+       }
+
+  }
+
+})
+
