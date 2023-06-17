Feature: HomePage functionality

  As a user, I want to verify HomePage functionality

 @smoke
  Scenario: Verify company logo is displayed on the homepage
    Given  I am on homepage
    When  I click on Accept Cookies
    Then Virgin Games logo is present on the page

@smoke
Scenario Outline: Verify the top menu on the homepage
  Given I am on homepage
  When I click on Accept Cookies
  And I click on menu "<menu>"
  Then Text is displayed on the page is "<menu>"

  Examples:
         |menu        |
         |Online Slots|
         |Live Casino |
         |Casino      |
         |Slingo      |
         |Online Bingo|
         |Free Games  |
         |Poker       |
