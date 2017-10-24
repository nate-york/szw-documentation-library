---
title: Coveo Setup
category: environment-setup
nav_sort: 2
---
## Installing Coveo
Ensure you have at least 5GB of disk space on the drive you will be installing the index on.

1. Install Coveo Enterprise Search
    1.	Run Coveo Enterprise Search 7.0 x64 (8541) for Sitecore.exe
        1.	If prompted to install hotfixes for/necessary updates to IIS and .NET Framework 3.5. Click Install.
        2.	When finished, click Next. Accept User Agreement. Click Next.
        3.	Choose custom installation.
        4.	 Ensure Mirror and Remote Converter are not going to be installed. Click Next.
        5.	 Account used to access files to index-> Click configure. Enter your windows login information. The account here should have local administration permissions. Hit ok.
        6.	Website Hosting the Administration Tool. -> Click configure. Set the port to 8081. Hit Ok.
        7.	Ensure Admin Service Security is disabled.
        8.	Click Install. When finished, a browser window will open to localhost:8081 (the Admin tool).
        9.	In the bottom right corner, click Create Index
        10.	When finished, it will ask you to enter your license. Open the Coveo Enterprise Search License Code.txt file and copy the entire contents and paste it into the window. Hit apply changes.

2. Install Coveo Search API
    1.	Run Coveo Search API 8.0.1127.exe
    2.	Check the “This installation is part of a Sitecore Integration” and click Next
        ![Coveo search API Install Screens](/library/assets/images/screenshots/coveo-search-api-01.png)
    3.	Enter “secret” as the secret token and click Next
        ![Coveo search API Install Screens](/library/assets/images/screenshots/coveo-search-api-02.png)
    4.	Complete install

3. Update Sitecore certificates
    1.	Copy contents of \BackEnd Dev Environment Coveo Files\Coveo Upgrade Files\CertStore.zip  to C:/CES7/CertStore, overwriting when prompted
    2.	Copy contents of \BackEnd Dev Environment Coveo Files\Coveo Upgrade Files\Certificates.zip to C:\CES7\Config\Certificates, overwriting when prompted

4. Update Coveo Search API configuration
    1.	From \BackEnd Dev Environment Coveo Files\Coveo Search API 8 Config File, copy and overwrite config.yml to C:\Program Files\Coveo Search API 8\

5. Build the solution in Visual Studio

6. Open Sitecore content editor, ensure you have developer tools active on your ribbon. Right click on the ribbon and select Developer.

7. Open the CES console in Start -> All Programs -> Coveo Enterprise Search 7 -> CES Console. Confirm you can connect.  Keep this open for the next steps.

8. Highlight the Interational Landing page item in the Sitecore tree. In the developer tab on the ribbon, select re-index tree. Confirm the popup window does not produce an error and that the item is successfully re-indexed by watching the CES Console.

9.	Update your solution. Resolve svn conflicts, build and resolve build conflicts. Sync TDS.

10.	 Reload redesign.dev.subzero.com/sitecore and do a full re-index of sitecore_master_index. Start -> Control Panel -> Indexing -> Indexing Manager. Check the sitecore_master_index and click rebuild at the bottom. Confirm items are being pushed to the CES and that items are being reindex via the CES console. If you don't see this something is wrong, contact John Seaman. Wait for the rebuild to finish.

11.	 Do a full rebuild of Coveo_core_index. Wait for it to finish.

12.	 Do a full rebuild of the Coveo_master_index.

13.	 Do a full rebuild of the Coveo_web_index.

14.	 Goto dev.subzero.com/search and confirm that you get no errors. Click around on the front end site and confirm you receive no errors.

---

## Install Front-end Dependencies 
* If you are a front end developer, please consult the [Front End Setup](http://localhost:3000/library/development/environment-setup/front-end-setup) documentation for front end setup instead of these directions. For back end devs, please follow the instructions below: 

    1.	To ensure that freshly compiled SCSS goes out with every single deployment to QA and Authoring, you should install the front-end dependencies located in the folder “Front-end Software Install”
    2.	Once in the folder, double click each file in the order they are labeled. Wait for the file to finish installed before moving onto the next one. 
    3.	To verify the software installed correctly open you visual studio solution and build the project. After building you should see at least one css file having changed.  If you do not, contact a front-end developer on the team and they can help you troubleshoot the issue.

--- 

## Troubleshooting
1. If after navigating to dev.subzero.com you receive the error: ```HTTP Error 500.21 - Internal Server Error```
    1. Open up a command prompt (start -> search box -> type ‘cmd’ -> hit enter), and type: ```cd C:\Windows\Microsoft.NET\Framework\v4.0.30319\``` 
    2. Hit enter. 
    3.	Type the following command into cmd: 
aspnet_regiis.exe –I and press enter. 
NOTE: It may not install by copying and pasting the command. You may have to manually type it.
    4. After it finishes installing, close the command prompt and try navigating to the site again.

2.	If when doing a TDS sync you get this error, you will have to manually remove this folder in sitecore.   
    
    ![TDS Sync Error](/library/assets/images/screenshots/coveo-tds-error.png)
 
    To do this: 

    1. Navigate to http://dev.subzero.com/sitecore. 
    2. In the sitecore tree, go to the folder sitecore/content/North America/Site Configuration/Products/Product Features/SubZero-Wolf/Wolf Features.
    3. DELETE the Wolf Features folder. If the delete command is grayed out, open the Review tab and press check-in then attempt to DELETE
    4. In the window prompt, select the option “Leave Links” and press continue
    5. Also, check to see if ‘sitecore/content/North America/Home/Inspiration/Brands/Sample Blog Post’ exists. If it does, delete it. In the prompt, choose “Remove Links”.
