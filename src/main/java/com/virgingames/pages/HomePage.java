package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//label[normalize-space()='Accept']")
    WebElement acceptCookie;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='Virgin Games']")
    WebElement companyLogo;

    @CacheLookup
    @FindBy(xpath = "//div[@id='styledApp']/div[1]/div[1]/ul[1]/li")
    List<WebElement> navigationMenu;

    @CacheLookup
    @FindBy(xpath = "//section[@class='StyledContent-sc-rrhwky-0 flIPPD']/h1")
    WebElement displayText;


    public void clickOnAcceptCookie() {
        clickOnElement(acceptCookie);
        log.info("Clicking on acceptCookie: " + acceptCookie.toString());
    }

    public boolean verifyCompanyLogo() {
        log.info("verify logo is Present or not :" + log);
        boolean isLogoDisplayed = companyLogo.isDisplayed();
        return isLogoDisplayed;
    }

    public void selectMenu(String menu) {
        log.info("Click on top menu ");

        for (WebElement list : navigationMenu) {

            if (list.getText().contains(menu)) {
                log.info("Click on top menu " + list.getText());
                System.out.println(list);
                clickOnElement(list);

                break;
            }

        }
    }

    public String getDisplayedText() {
        log.info("Verify the text " + displayText);
        return getTextFromElement(displayText);
    }
}
