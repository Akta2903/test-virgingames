package com.virgingames.cucumber.steps;

import com.virgingames.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class HomePageSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Accept Cookies$")
    public void iClickOnAcceptCookies() {
        new HomePage().clickOnAcceptCookie();
    }

    @Then("^Virgin Games logo is present on the page$")
    public void virginGamesLogoIsPresentOnThePage() {

        // Assert.assertTrue(new HomePage().verifyCompanyLogo());
        Assert.assertTrue(new HomePage().verifyCompanyLogo());
    }

    @And("^I click on menu \"([^\"]*)\"$")
    public void iClickOnMenu(String menu) {
        new HomePage().selectMenu(menu);

    }

    @Then("^Text is displayed on the page is \"([^\"]*)\"$")
    public void textIsDisplayedOnThePageIs(String text) {

        Assert.assertTrue(new HomePage().getDisplayedText().contains(text));

        System.out.println(new HomePage().getDisplayedText());

    }
}


