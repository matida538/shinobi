diff --git a/web/pages/blocks/help.ejs b/web/pages/blocks/help.ejs
index d4d7b60..878596a 100644
--- a/web/pages/blocks/help.ejs
+++ b/web/pages/blocks/help.ejs
@@ -1,4 +1,4 @@
-<% if(!config.userHasSubscribed){ %>
+<% if(config.userHasSubscribed){ %>
     <style>
         @media (min-width: 768px){
             #help_window .modal-dialog {
