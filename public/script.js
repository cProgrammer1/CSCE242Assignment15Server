/* 
    Created by Chrissy Dobrowolski 
    Assignment 15- Server Get and Post (copied over from Assignment 14) 
    CSCE 242- 001 
    Due: 3.31.2024 

*/


const getCrafts = async() =>
{
    try
    {
        // let response = await fetch("http://localhost:3000/api/crafts");
        let response = await fetch("https://csce242assignment15server.onrender.com/api/crafts");
        return await response.json();

    }
    catch(error)
    {
        console.log(error);


        return "";

    }

};

const showCrafts = async() =>
{
    // FOR TESTING: console.log("Testing");
    // console.log(craftsJSON);

    craftsJSON = await getCrafts();

    const craftsDiv = document.getElementById("crafts");

    if(craftsJSON == "")
    {
        craftsDiv.innerHTML = "There is no data to display"
    

        return;

    }

    const craftsContainer = document.createElement("section");
    craftsContainer.classList.add("crafts-container");
    craftsDiv.append(craftsContainer);

    let craftSection;

    for(let i=0; i<4; i++)
    {
        craftSection = document.createElement("section");
        craftSection.classList.add(`craft-section${i}`);
        craftsContainer.append(craftSection);

    }


    craftsJSON.forEach((craft) => 
    {
        // FOR TESTING: console.log(craft);

        const craftSection0 = document.querySelector(".craft-section0");
        craftSection0.classList.add("craft-section0");
        // FOR TESTING: console.log(craftSection0);

        const craftSection1 = document.querySelector(".craft-section1");
        craftSection1.classList.add("craft-section1");

        const craftSection2 = document.querySelector(".craft-section2");
        craftSection2.classList.add("craft-section2");

        const craftSection3 = document.querySelector(".craft-section3");
        craftSection3.classList.add("craft-section3");


        // Places crafts in the first section 
        if((craft.id == "0"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");

                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "4"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "8"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "12"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "16"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "20"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "24"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }


        // Places crafts the second section 
        if((craft.id == "1"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "5"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "9"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "13"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "17"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");


                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "21"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
               // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }


        // Places crafts the third section 
        if((craft.id == "2"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "6"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");


                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "10"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "14"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "18"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "22"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }


        // Places crafts the fourth section 
        if((craft.id == "3"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "7"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "11"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "15"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "19"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftImage.classList.add("ferris-wheel-image")
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image", "expanded-ferris-wheel-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "23"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                // document.getElementById("crafts-modal").style.display = "block";
                openCraftsModal("expanded-image-section");
                openCraftsModal("expanded-info-section");
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        };

    });

};


const openCraftsModal = (id) =>
{
    document.getElementById("crafts-modal").style.display = "block";

    console.log("ID clicked: ", id);
    
    // Selects all of modal-content direct children for each item 
    document.querySelectorAll("#modal-content > *").forEach((item) =>
    {
        item.classList.add("hidden");
        console.log("Item hidden: ", item);

        document.getElementById(id).classList.remove("hidden");
        console.log("ID shown: ", id)

    });

};

const showAddCraftForm = (event) =>
{
    event.preventDefault();

    resetCraftForm();
    openCraftsModal("add-craft-form");

    
};

const addSupply = (event) =>
{
    event.preventDefault();

    document.getElementById("add-supply-click").onclick = addSupply;

    const supplySection = document.getElementById("supplies-section");

    const supplyInput = document.createElement("input");
    supplyInput.classList.add("supply");
    supplyInput.classList.add("block");
    supplyInput.type = "text";
    supplySection.append(supplyInput);

};

const resetCraftForm = () =>
{
    const addCraftForm = document.getElementById("add-craft-form");
    addCraftForm.reset();

    document.getElementById("supplies-section").innerHTML = "";

    document.getElementById("image-preview").src = "";

};

const addCraft = async(event) =>
{
    event.preventDefault();

    const addCraftForm = document.getElementById("add-craft-form");

    const addCraftFormData = new FormData(addCraftForm);
    addCraftFormData.append("supplies", getSupplies());

    console.log(...addCraftFormData);

    const response = await fetch("/api/crafts",
    {
        method:"POST",
        body:addCraftFormData,

    });

    if(response.status != 200)
    {
        console.log("Error posting craft data");

    }

    await response.json();
    resetCraftForm();
    document.getElementById("crafts-modal").style.display = "none";

    showCrafts();

};

const getSupplies = () =>
{
    const supplyInputs = document.querySelectorAll("#supplies-section input");

    const supplies = [];

    supplyInputs.forEach((input) =>
    {
        supplies.push(input.value);

    });


    return supplies;

};


showCrafts();

document.getElementById("add-craft-form").onsubmit = addCraft;

document.getElementById("plus-sign-add-craft").onclick = showAddCraftForm;
document.getElementById("add-supply-click").onclick = addSupply;

document.getElementById("image-input").onchange = (event) =>
{
    const imagePreview = document.getElementById("image-preview");

    // If an image was not picked or the file chosen is blank 
    if(!event.target.files.length)
    {
        imagePreview.src = "";


        return;

    }

    document.getElementById("placeholder-preview-image").classList.remove("block");
    document.getElementById("placeholder-preview-image").classList.add("hidden");

    // Populates URL of src attribute of imagePreview with 0th (first/only) file chosen 
    imagePreview.src = URL.createObjectURL(event.target.files.item(0));

};

document.getElementById("cancel-add-craft-button").onclick = () =>
{
    console.log("Cancel button clicked");
    document.getElementById("crafts-modal").style.display = "none";

};

document.getElementById("modal-close").onclick = () =>
{
    // console.log("Clicked");
    document.getElementById("crafts-modal").style.display = "none";
    
    // document.getElementById("add-craft-form").style.display = "none";
    
    document.querySelectorAll("#expanded-image-info-section > *").forEach((item) =>
    {
        item.classList.add("hidden");

    });

};