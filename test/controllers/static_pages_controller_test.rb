require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get military" do
    get static_pages_military_url
    assert_response :success
  end

  test "should get web" do
    get static_pages_web_url
    assert_response :success
  end

  test "should get aug" do
    get static_pages_aug_url
    assert_response :success
  end

  test "should get drone" do
    get static_pages_drone_url
    assert_response :success
  end

  test "should get patent" do
    get static_pages_patent_url
    assert_response :success
  end

  test "should get paper" do
    get static_pages_paper_url
    assert_response :success
  end

end
