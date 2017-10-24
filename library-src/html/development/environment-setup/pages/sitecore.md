---
title: Sitecore Setup
category: environment-setup
nav_sort: 1
---
## Pre-Installation Requirements

1. Install Visual Studio Professional 2013 (Visual Studio Professional 2012 acceptable) (Required)

2. Optionally install VisualSVN (Recommended)

3. Optionally install ReSharper (Recommended)

4. Install .NET 4.5

5. Install SQL Server 2012 Developer Edition with SP1 (Required)

6. Obtain current backups of the following databases which will need to be set up on your local development machine. These can be retrieved by any current SZW team developer. Save these backups to a temporary location on your local machine.  Recommend that they compress the files before transfer:
    * SubZeroSitecore_Core.bak
    * SubZeroSitecore_Web.bak
    * SubZeroSitecore_Master.bak
    * SubZeroSitecore_Analytics.bak

7. Be sure that you have certain Windows Features installed.
    1. Open Start -> in the search box type appwiz.cpl and hit enter -> click on 'Turn Windows features on or off'. When the new window loads, be sure Internet Information Services is checked.
    2. In the same window, expand Internet Information Services -> World Wide Web Services -> Application Development Features. Be sure .NET Extensibility, and ASP.NET are checked.
    3. If you are installing IIS 7 (Windows 7+), in the same window expand 'Internet Information Services' -> Web Management Tools. Be sure 'IIS 6 Management Compatibility' is checked.
    4. Hit ok and let Windows install IIS. When done you can close Programs and Features.

8. Create a folder called “Dev” on your harddrive (For Example: ‘C:/dev’). Within this folder create two new folders called dev-trunk and trunk.

9. Checkout the Subversion repository Redesign branches dev-trunk and trunk into their respective folders 
    1. http://subversion.ascedia.com/svn/subzero-portal-2010-website/dev-trunk
        * This will be the svn branch where code changes are developed and tested on QA.
    2. http://subversion.ascedia.com/svn/subzero-portal-2010-website/trunk
        * This will be the svn branch where code changes are pushed to authoring and live. When your code changes are tested on your local dev and on QA you will merge them from dev-trunk to trunk
        ![Repos](/library/assets/images/screenshots/requirements-repo.png)
        
 
10.	Within the root of the dev-trunk lives a directory named sitecore_installation. All necessary files for installation are located here in a flat list and future file resources will be referenced within the context of this folder.

11.	Install Team Development for Sitecore (TDS) using the windows installer corresponding to your version of Visual Studio. Download the latest release version for installation from https://www.teamdevelopmentforsitecore.com/Download. Run the installation file for the version of Visual Studio you are using. 

12.	Using SQL Server Management Studio, create a user in your local SQL Server database with the following information:
    * Authentication type: SQL Server authentication
    * Login name: SubZeroSitecore
    * Password: Qest3mec
    * Uncheck the ‘Enforce password policy’ check box
        ![SQL User Setup](/library/assets/images/screenshots/requirements-sql-user.png)
 
13.	Create a local folder that will be used as the ‘Web Root’ of your SubZero Sitecore site installation.
    1. The path must be C:\Sitecore\SubZeroRedesignSitecore
    2. Grant ‘Full control’ permissions on this folder for the user that runs your local SQL Server instance (e.g. Network Service or whichever user you've got configured). If you don't complete this step, the Sitecore installer will fail.
        ![SQL User Permissions](/library/assets/images/screenshots/requirements-sql-user-permissions.png) 
  
---

## Installing SZW Databases
1.	Stop the local dev site.
    1. Start -> in the search box type ‘inetmgr’ and hit enter.
    2. Select the site SubZeroRedesignSitecore and under ‘Manage Web Site’ press Stop

2.	Make sure you have the .bak database files saved locally (Pre-Installation Requirements, step 6) 

3.	Create a folder structure for your databases on a drive where you have plenty of space (~80Gb).  You should have locations for the database rows data file and log file:
    * E:\SQL2012\Databases\.
    * E:\SQL2012\Logs\.

4.	In Microsoft SQL Server Management Studio (MSSMS) Object Explorer, Right-click on the Databases folder and select Restore Database …

5.	A new window will pop up. On the General tab under Source, select Device. Hit the browse button on the right.

6.	A new window will pop up named ‘Select backup devices’. Click Add. Browse and select the correct .bak file you extracted. Click ok. Click ok.

7.	Under destination database, name the database SubzeroSitecore_* accordingly.  If you are mounting the Core backup, the database name will be SubzeroSitecore_Core; Master will be SubzeroSitecore_Master, etc.

8.	In Select a page (on the left), click on the Files tab. You’ll see a Rows Data row and a Log row. To the right of each is a browse button (…). 
    1.	Place the Rows Data file type in the Databases directory created in step 3.
    2.	Place the Log file type in the Logs directory created in step 3.

9.	In the Options tab, select the checkbox ‘Overwrite the existing database (WITH REPLACE)’. In the Recovery State dropdown, select RESTORE WITH RECOVERY.

10.	Multiple databases can be restored concurrently.  These may take some time to restore, be patient.  

11.	Repeat steps 4-11 for the remaining databases.

12.	For each of the databases you restored, expand [DATABASE NAME] -> Security -> Users -> Delete the user SubZeroSitecore

13.	Make sure you have completed step 12 of Pre-Installation Requirements above.

14.	Using MSSMS, grant the SubZeroSitecore user db_owner role membership for the four new Sitecore databases that were just created (SubZeroSitecore_Core, SubZeroSitecore_Master, SubZeroSitecore_Web, SubZeroSitecore_Analytics)
    1.	Open MSSMS
    2.	Expand Security -> Logins. Right-click the SubZeroSitecore user. Select Properties. Select User Mapping
    3.	Check the box next to the SubZeroSitecore_Core database and then check the box below next to ‘db_owner’.
    4.	Repeat step 15c for the SubZeroSitecore_Master, SubZeroSitecore_Web, and SubZeroSitecore_Analytics databases

15.	Start the site SubZeroSitecore back up in IIS
 
---

## IIS and Site Setup
1.	Obtain the latest copy of the site webroot from a developer.  This should include a Data folder and Website folder.

2.	Extract the folders into a new Sitecore website so the folder paths are as follows:
    * C:\Sitecore\SubZeroRedesignSitecore\Data
    * C:\Sitecore\SubZeroRedesignSitecore\Website

3.	Open IIS.  In Connections, expand your server and right click sites -> Add Web Site…

4.	In the Add Web Site dialog use the following settings
    1.	Site name: SubZeroRedesignSitecore
    2.	Physical path: C:\Sitecore\SubZeroRedesignSitecore\Website
    3.	Host name: dev.subzero.com
    4.	Click OK

5.	Right-click the new site SubZeroRedesignSitecore, click “Edit Bindings”.  Add the following bindings:
    * Host name: dev.subzero.com; Type: http; IP address: All Unassigned; Port:80
    * Host name: ca.dev.subzero.com; Type: http; IP address: All Unassigned; Port:80
    * Host name: mx.dev.subzero.com; Type: http; IP address: All Unassigned; Port:80

6.	Click Application Pools -> Right-click SubZeroRedesignSitecore -> Advanced Settings…

7.	Apply the following settings:
    * .Net Framework: v4.0
    * Managed Pipeline Mode: Integrated
    * Identity: NetworkService

8.	Start the website, start the app pool

9.	Open your hosts file (in Win7 this is located here C:\Windows\System32\drivers\etc\hosts, you can open it with notepad) – OR use the Hosts File Editor program and edit the line ‘127.0.0.1 SubZeroRedesignSitecore’ changing it to ‘127.0.0.1 dev.subzero.com’. Save and close your hosts file.
    1.	Open Start -> Search programs and files -> type ‘cmd’ and hit enter. In the command window that opens, type ‘ipconfig /flushdns’ and enter. Repeat this a few times (if you hit the up arrow, you can quickly get the previously entered command).
    2.	Navigate to dev.subzero.com in your browser. See Troubleshooting section if you encounter any error messages. If a page loads and you receive no errors, continue to the next step.
 
---

## Configuring Solution
1. Open the SubZero.sln solution that you checked out in the pre-installation and change the build configuration to ‘Public Site - Dev’.

2. Configure the TDS.Master and SubZero.Public.Web.Tds-Core projects to connect to your local Sitecore installation.
    * Right-click on the TDS.Master project and select ‘Install Sitecore Connector’. Repeat this step for the SubZero.Public.Web.Tds-Core project.

3. Build the solution.

4. Go to http://dev.subzero.com/sitecore and login
    1. Open Content Editor
    2. Select root of the sitecore tree
    3. Open Publish->Publish->Publish Site. Press Next
    4. Make sure Production is not checked, but Staging is checked and press Publish
    5. Go to http://dev.subzero.com/ and you should see the subzero site

5. Sync your sitecore content tree with TDS.
    1. If you get an error during the sync about the folder Wolf Features, see troubleshooting.
    2. Right-click on the SubZero.Public.Web.Tds-Core project and select Sync with Sitecore.
    3. Wait for the sync results process to complete.
    4. Once complete, click on any item in the tree and select ctrl+a on your keyboard, which will highlight all items in the tree.
    5. Click on the button at the top of the window that has the tooltip message ‘Make selected Sitecore items match project’.
    6. Select ‘Do Updates’ at the bottom of the window.
    7. Once complete, close the window.

6. Repeat step 5 TWICE for the TDS.Master project

7. Install Sitecore Rocks (Optional)
    1. In Visual Studio, open Tools -> Extensions and Updates.
    2. Under Online extensions search ‘Sitecore Rocks’. Once you see the result, click on install and restart Visual Studio.